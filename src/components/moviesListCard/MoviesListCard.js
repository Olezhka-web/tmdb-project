import MoviesList from "../moviesList/MoviesList";
import './moviesListCard-style.css';

export default function MoviesListCard( {movies:{results}, genres }){
    return (
        <section className="section__movie-list">
            {
                results && results.map((movie, index) => (<MoviesList movie={movie} key={movie.id} count={index} genres={genres}/>))
            }
        </section>
    )
}
