import {Fragment, useEffect, useState} from "react";
import Header from "../header/Header";
import {fIcon, locationIcon} from "../../images";
import GenreBadge from "../genreBadge/GenreBadge";
import StarsRating from "../starsRating/StarsRating";

export default function PosterPreview(props){
    const {location: {state}} = props;

    const [movie, setMovie] = useState();
    const [genres, setGenres] = useState();

    useEffect(() =>{
        setMovie({...state.movie});
        setGenres({...state.genres});
    }, [state]);

    return(
        <div>
            {
                movie && genres && <Fragment>
                    <Header/>
                        <div>
                            <div><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-icon"
                                      style={{width: '240px', height: '150px'}}/></div>
                            <div className="list__item-title">{movie.title}</div>
                            <div className="list__item-genres">
                                <div><img src={locationIcon} alt="location-icon" className="location-icon"/></div>
                                <div><GenreBadge movie={movie} genres={genres}/></div>
                            </div>
                            <div>{movie.overview}</div>
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
                </Fragment>
            }
        </div>
    )
}
