import { Link } from "react-router-dom";
export const Movie = ({ movie }) => (
        <div className="flex bg-white shadow-lg m-2 rounded-md border bor-gray-300 p-2 items-center">
            <div className="flex items-center">
                <img className="p-2 rounded-sm" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="{movie.title}" />
            </div>
            <div >
                <div className="text-xl font-medium text-black">{movie.title}</div>
                <p className="text-gray-500">
                    <Link to={`/movie/${movie.id}`} className="btn btn-primary"> Ver Detalhes</Link>
                    </p>
            </div>
        </div>
  
)