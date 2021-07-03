export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const addMovie = (payload) => ({
    type: ADD_MOVIE,
    payload, 
})
export const removieMovie = (payload) => ({
    type: REMOVE_MOVIE,
    payload, 
})