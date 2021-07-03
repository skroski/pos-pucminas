import { ADD_MOVIE, REMOVE_MOVIE } from "../actions/movies";
const initialState = {
    movies: []
}
export const favorites = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: state.movies.concat(action.payload)
            }
        case REMOVE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.payload.id)
            }
          
    
        default:
           return state;
    }
};