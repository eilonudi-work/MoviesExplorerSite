import { FETCH_MOVIES, UPDATE_MOVIE, DELETE_MOVIE, NEW_MOVIE, ERROR_FETCHING, ADD_EDIT_MODAL } from './types';
import axios from 'axios';
import { asyncForEach, firstLetterUpperCase } from '../utils/generalUtils';
import {reset} from 'redux-form';


let INITIAL_ID = 0;

export const fetchMovies = () => {
    return async dispatch => {
        try {
            const APIKey = 'd298d25';
            const moviesSearchAPIUrl = `https://www.omdbapi.com/?s=Harry+Potter&y=&plot=short&r=json&apikey=${APIKey}`;
            const moviesTitleAPIUrl = (imdbID) => `https://www.omdbapi.com/?i=${imdbID}&apikey=${APIKey}`;

            const movieSearchDataRes = await axios.get(moviesSearchAPIUrl);
            let movies = movieSearchDataRes.data.Search;

            await asyncForEach(movies, async movie => {
                const movieDataResponse = await axios.get(moviesTitleAPIUrl(movie.imdbID));
                const { Runtime, Genre, Director } = movieDataResponse.data;
                
                movie.id = INITIAL_ID;
                movie.Title = firstLetterUpperCase(movie.Title)
                movie.Director = Director;
                movie.Genre = Genre;
                movie.Runtime = Runtime;

                INITIAL_ID++;
            });


            dispatch({
                type: FETCH_MOVIES,
                payload: movies
            });
        }
        catch (e) {
            dispatch({
                type: ERROR_FETCHING,
                payload: e.message
            });
        }
    }
}

export const addEditModalStateChange = (movie) => dispatch => {
    if (!movie) movie = {};
    dispatch({
        type: ADD_EDIT_MODAL,
        payload: movie
    });
};



export const deleteModalStateChange = (movie) => dispatch => {
    if(movie) {
        dispatch({
            type: DELETE_MOVIE,
            payload: movie
        });
    }
    else {
        dispatch({
            type: DELETE_MOVIE,
            payload: {}
        });
    }
};


export const deleteMovie = (deletedMovie) => (dispatch, getState) => {
    const state = getState();
    let movies = state.movies.movies;

    movies = movies.filter(movie => movie.id !== deletedMovie.id);

    dispatch({
        type: DELETE_MOVIE,
        payload: {},
        movies: [...movies]
    });

};

export const updateMovie = (updatedMovie) => (dispatch, getState) => {
    const state = getState();
    const movies = state.movies.movies;

    updatedMovie.Title = firstLetterUpperCase(updatedMovie.Title)
    const movieIndex = movies.findIndex(movie => movie.id === updatedMovie.id)
    movies[movieIndex] = updatedMovie;

    dispatch(reset('addEditMovie'));
    
    dispatch({
        type: UPDATE_MOVIE,
        payload: [...movies]
    });
};

export const saveNewMovie = (newMovie) => (dispatch, getState) => {

    dispatch(reset('addEditMovie'));

    const state = getState();
    const movies = state.movies.movies;

    newMovie.Title = firstLetterUpperCase(newMovie.Title)
    newMovie.id = INITIAL_ID;
    INITIAL_ID++;
    
    movies.push(newMovie);
    
    dispatch({
        type: NEW_MOVIE,
        payload: [...movies]
    });
};