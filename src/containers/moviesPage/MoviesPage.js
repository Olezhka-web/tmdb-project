import './moviesPage-style.css'
import {Link} from "react-router-dom";

export default function MoviesPage({ movies, page, currentPage, clickPage }){
    return(
        <Link to={
            {
                pathname: `/movies/page/${page}`
            }
        }>
        <span className={currentPage === page ? "current-page" : "page"} onClick={() => clickPage(page)}>
                {page}
        </span>
        </Link>
    )
}