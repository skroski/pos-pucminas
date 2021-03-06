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
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {movies.map((movie) => (
                     <div key={movie.id} className="items-center">
                     <Movie movie={movie}/>
                  </div>
                ))}
            </div>
        </div>
    </div>
)};