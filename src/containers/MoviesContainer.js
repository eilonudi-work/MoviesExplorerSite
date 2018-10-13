import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { fetchMovies, deleteModalStateChange, addEditModalStateChange } from '../actions/movieActions';
import Spinner from '../components/Spinner';
import errorImg from '../assets/error_image.png';

class MoviesContainer extends Component {

    componentWillMount() {
        this.props.fetchMovies();
    }

    onErrorImage = (e) => { e.target.onerror = null; e.target.src=errorImg; }

    render() {
        const { movies, addEditModalStateChange, deleteModalStateChange, errors } = this.props;

        if (!this.props.moviesLoaded) {
            return <Spinner errors={errors} />;
        }
        
        return (
            <div className="container">
                <div className="row">
                    {
                        movies.map((movie, index) => {
                            return <Movie key={index} movieData={movie} edit={addEditModalStateChange} delete={deleteModalStateChange} onErrImg={this.onErrorImage}/>
                        })
                    }
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
    moviesLoaded: state.movies.moviesLoaded,
    errors: state.movies.errors
});


export default connect(mapStateToProps, { fetchMovies, deleteModalStateChange, addEditModalStateChange })(MoviesContainer);