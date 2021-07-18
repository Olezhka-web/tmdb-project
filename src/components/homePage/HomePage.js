import Header from "../header/Header";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import MoviesPage from "../../containers/moviesPage/MoviesPage";
import {Fragment, useEffect} from "react";
import {loadingIcon} from "../../images";
import './homePage-style.css';
import {useParams} from "react-router";

export default function HomePage({ movies, genres, pages, currentPage, clickPage, loadingPage, checkSwitcher, switchTheme, setGenres, genreSelected }){
    const { id } = useParams();

    useEffect(() =>{
        if(id && +id !== currentPage) return clickPage(+id);
    }, [id]);

        return(
            <Fragment>
                <Header checkSwitcher={checkSwitcher} switchTheme={switchTheme}/>
                {!loadingPage ? (<Fragment>
                        {movies.length !== 0 && genres.length !== 0 && <MoviesListCard movies={movies} genres={genres} switchTheme={switchTheme} checkSwitcher={checkSwitcher} setGenres={setGenres} genreSelected={genreSelected}/>}
                        {
                            switchTheme === 'Light' ?
                                (
                                    <div className="pages__container-light" style={{background: "white", paddingTop: "20px", paddingBottom: "20px" ,display: "flex", justifyContent: "center"}}>
                                        {movies.length !== 0 && genres.length !== 0 && pages.map((item, index) => (<MoviesPage movies={movies} page={item} key={index} currentPage={currentPage} clickPage={clickPage} switchTheme={switchTheme} />))}
                                    </div>
                                )
                                :
                                (
                                    <div className="pages_container-dark" style={{background: "black", paddingTop: "20px", paddingBottom: "20px" ,display: "flex", justifyContent: "center"}}>
                                        {movies.length !== 0 && genres.length !== 0 && pages.map((item, index) => (<MoviesPage movies={movies} page={item} key={index} currentPage={currentPage} clickPage={clickPage} switchTheme={switchTheme}/>))}
                                    </div>
                                )
                        }
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


