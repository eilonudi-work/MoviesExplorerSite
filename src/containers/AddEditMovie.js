import React from 'react';
import { reduxForm } from 'redux-form';
import { addEditModalStateChange, updateMovie, saveNewMovie } from '../actions/movieActions';
import { connect } from 'react-redux';  
import { validate, warn } from '../utils/fieldValidators';
import Modal from 'react-bootstrap4-modal';

import MovieForm from '../components/MovieForm';

let AddEditMovie = (props) => {
    const { modalState, addEditModalStateChange, updateMovie, saveNewMovie, initialValues, invalid, handleSubmit, pristine } = props;

    if(Object.keys(initialValues).length === 0) {
        return (   
            <Modal visible={modalState} onClickBackdrop={() => addEditModalStateChange()}>
                <MovieForm 
                    modalTitle='Add New Movie'
                    invalid= {invalid} 
                    exit= {addEditModalStateChange} 
                    handleSubmit= {handleSubmit}
                    onSubmit= {saveNewMovie}
                />
            </Modal>
        );
    }
    
    return (   
        <Modal visible={modalState} onClickBackdrop={() => addEditModalStateChange()}>
            <MovieForm 
                modalTitle={initialValues.Title}
                initialValues= {initialValues} 
                invalid= {invalid} 
                exit= {addEditModalStateChange} 
                handleSubmit= {handleSubmit}
                onSubmit= {updateMovie}
                pristine={pristine}
            />
        </Modal>
    );
};


const mapStateToProps = (state) => ({
    initialValues: state.movies.selectedMovie,
    modalState: state.movies.addEditModalState,
    movies: state.movies.movies
});

AddEditMovie = reduxForm({ form: 'addEditMovie', enableReinitialize: true, validate, warn })(AddEditMovie);

export default connect(mapStateToProps, { addEditModalStateChange, updateMovie, saveNewMovie } )(AddEditMovie); 
