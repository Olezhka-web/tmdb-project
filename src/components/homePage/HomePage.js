import Header from "../header/Header";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import MoviesPage from "../../containers/moviesPage/MoviesPage";
import {Fragment, useEffect} from "react";
import {loadingIcon} from "../../images";
import './homePage-style.css';
import {useParams} from "react-router";

export default function HomePage({ movies, genres, pages, currentPage, clickPage, loadingPage }){
    const { id } = useParams();

    useEffect(() =>{
        if(id && +id !== currentPage) return clickPage(+id);
    }, [id]);

        return(
            <Fragment>
                <Header/>
                {!loadingPage ? (<Fragment>
                        {movies.length !== 0 && genres.length !== 0 && <MoviesListCard movies={movies} genres={genres}/>}
                        <div className="pages-container">
                            {movies.length !== 0 && genres.length !== 0 && pages.map((item, index) => (<MoviesPage movies={movies} page={item} key={index} currentPage={currentPage} clickPage={clickPage}/>))}
                        </div>
                    </Fragment>)
                    :
                    (<div className="loading-container">
                        <img src={loadingIcon} alt="loading-icon" className="loading-icon"/>
                        Page Loading
                    </div>)
                }
            </Fragment>
        )
}


