import './moviesPage-style.css'
import {Link} from "react-router-dom";

export default function MoviesPage({ movies, page, currentPage, clickPage, switchTheme }){
    return(
        switchTheme === 'Light' ?
            (
                <div className="page__link-light">
                    <Link to={
                        {
                            pathname: `/movies/page/${page}`
                        }
                    }>
        <span className={currentPage === page ? "current-page" : "page"} onClick={() => clickPage(page)}>
                {page}
        </span>
                    </Link>
                </div>
            )
            :
            (
                <div className="page__link-dark">
                    <Link to={
                        {
                            pathname: `/movies/page/${page}`
                        }
                    }>
        <span className={currentPage === page ? "current-page" : "page"} onClick={() => clickPage(page)}>
                {page}
        </span>
                    </Link>
                </div>
            )
    )
}
