import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = (props) =>  { 
    const [ movie, setMovie] = useState({});
    const getMovie = async () => {
        const { data }= await MoviesService.getMovieDetail(props.match.params.id);
        setMovie(data)
    };
    useEffect(() => {
        getMovie();
    }, []);
return (
   <section className="movie-detail">
       <hr />
       <h2>Detalhes do Filme</h2>
       
       <div className="container">
        <div className="row gx-5">
            <div className="col-6">
            <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="" />
                
            </div>
            <div className="col-6">
                <h3>{movie.title}</h3>
                <ul>
                    <li> Budget: {movie.budget}</li>
                    <li> Original Language: {movie.original_language}</li>
                    <li> Popularidade: {movie.popularity}</li>
                </ul>
                {movie.overview}
            </div>
        </div>
      
       </div>
   </section>
)
}