import { useEffect, useState } from "react";
import { Movie } from "../components/Movie";
import { MoviesService } from "../api/MoviesService";
export const Home = () => { 
    
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const {data: { results }} = await MoviesService.getMovies();
        setMovies(results);
    }
    useEffect(() => {

        getMovies();

    }, []);

    return (
    <div>
        <div className="container">
            <div className="row align-items-start">
                {movies.map((movie) => (
                     <div key={movie.id} className="col-3">
                     <Movie movie={movie}/>
                  </div>
                ))}
            </div>
        </div>
    </div>
)};