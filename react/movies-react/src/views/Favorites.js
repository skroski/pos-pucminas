import { useSelector } from "react-redux"

export const Favorites = () => {
    const favorites = useSelector(state => state.favorites)
    return (
        <section><h1>
            Meus Filmes Favoritos
            </h1>
            <ul>
                {favorites.movies.map(movie => <li>{movie.title}</li>)}
            </ul>
            </section>
        
    )
}