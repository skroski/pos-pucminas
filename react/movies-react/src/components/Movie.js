import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie, removieMovie} from "../store/actions/movies";
export const Movie = ({ movie }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites)
    return (
        <div className="flex bg-white shadow-lg m-2 rounded-md border bor-gray-300 p-2 items-center">
            <div className="flex items-center">
                <img className="p-2 rounded-sm" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="{movie.title}" />
            </div>
            <div >
                <div className="text-xl font-medium text-black">{movie.title}</div>
                <p className="text-gray-500">
                    <Link to={`/movie/${movie.id}`} className="btn btn-primary"> Ver Detalhes</Link>
                    { 
                        favorites.movies.find(m => m.id === movie.id) 
                        ?  <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-light rounded-md text-white bg-red-600 hover:bg-indigo-700 md:py-4 md:text-md md:px-4" onClick={() => dispatch(removieMovie(movie))}>Remover favoritos</button> 
                        : <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-light rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-md md:px-4" onClick={() => dispatch(addMovie(movie))}>Add favoritos</button>
                    }
                    </p>
            </div>
        </div>
  
)};