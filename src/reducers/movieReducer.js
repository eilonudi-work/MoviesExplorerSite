import { FETCH_MOVIES, UPDATE_MOVIE, DELETE_MOVIE, NEW_MOVIE, ERROR_FETCHING, ADD_EDIT_MODAL } from '../actions/types';

const initialState = {
    movies: [],
    moviesLoaded: false,
    
    selectedMovie: {},
    
    deleteMode: false,
    addEditModalState: false,
    
    errors: ''
};

export default (state = initialState, action) => {
    var returnedState;

    switch (action.type) {
        case FETCH_MOVIES:
            returnedState = {...state, movies: action.payload, moviesLoaded: true };
            break;
        
        case ERROR_FETCHING:
            returnedState = {...state, errors: action.payload };
            break;
        
        case ADD_EDIT_MODAL: 
            returnedState = {...state, addEditModalState: !state.addEditModalState, selectedMovie: action.payload}
            break;

        case UPDATE_MOVIE:
            returnedState = {...state, movies: action.payload, addEditModalState: !state.addEditModalState };
            break;

        case NEW_MOVIE:
            returnedState = {...state, movies: action.payload, addEditModalState: !state.addEditModalState };
            break;

        case DELETE_MOVIE:
            if (action.movies) {
                returnedState = {...state, selectedMovie: action.payload, deleteMode: !state.deleteMode, movies: action.movies };
            }
            else {
                returnedState = {...state, selectedMovie: action.payload, deleteMode: !state.deleteMode };
            }
            break;
        
        default: 
            returnedState = state;
    };

    return returnedState;
};

