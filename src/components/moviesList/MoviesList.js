import GenreBadge from "../genreBadge/GenreBadge";
import StarsRating from "../starsRating/StarsRating";
import './movieList-style.css';
import {Link} from "react-router-dom";
import {fIcon, locationIcon} from "../../images";

export default function MoviesList({ movie, count, genres }){
    return(
        count < 15 ?
        <div className="movie__list-item" style={{marginRight: "20px"}}>
            <Link to={
                {
                    pathname: `/movies/${movie.id}`,
                    state: {movie, genres}
                }
            }>
                {count % 2 === 0 ? <div><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-icon" style={{width: '100%', height: '150px'}}/></div> : <div><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-icon" style={{width: '100%', height: '245px'}}/></div>}
                <div className="list__item-container">
                <div className="list__item-title">{movie.title}</div>
                <div className="list__item-genres">
                    <div><img src={locationIcon} alt="location-icon" className="location-icon"/></div>
                    <div><GenreBadge movie={movie} genres={genres}/></div>
                </div>
                <div className="list__item-description">{movie.overview.length > 30 ? movie.overview.substring(0, movie.overview.indexOf('.'))+"..." : movie.overview}</div>
                </div>
                </Link>
            <hr/>
            <div className="item-container">
                <div className="stars-container">
                    <StarsRating rating={movie.vote_average}/>
                </div>
                <div className="f-link">
                    <img src={fIcon} alt="f-icon"/>
                </div>
            </div>
        </div>
            :
            <div className="movie__list-item">
                <Link to={
                    {
                        pathname: `/movies/${movie.id}`,
                        state: {movie, genres}
                    }
                }>
                    {count % 2 === 0 ? <div><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-icon" style={{width: '100%', height: '150px'}}/></div> : <div><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-icon" style={{width: '100%', height: '245px'}}/></div>}
                    <div className="list__item-container">
                        <div className="list__item-title">{movie.title}</div>
                        <div className="list__item-genres">
                            <div><img src={locationIcon} alt="location-icon" className="location-icon"/></div>
                            <div><GenreBadge movie={movie} genres={genres}/></div>
                        </div>
                        <div className="list__item-description">{movie.overview.length > 30 ? movie.overview.substring(0, movie.overview.indexOf('.'))+"..." : movie.overview}</div>
                    </div>
                </Link>
                <hr/>
                <div className="item-container">
                    <div className="stars-container">
                        <StarsRating rating={movie.vote_average}/>
                    </div>
                    <div className="f-link">
                        <img src={fIcon} alt="f-icon"/>
                    </div>
                </div>
            </div>
    )
}
