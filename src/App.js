import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrentPage, getGenres, getMovies, setLoadingFalse, setLoadingTrue} from "./redux/actionCreators";
import './App.css';
import HomePage from "./components/homePage/HomePage";
import PosterPreview from "./components/posterPreview/PosterPreview";

function App() {

  const {movies} = useSelector(state => state.moviesReducer);
  const {genres} = useSelector(state => state.genresReducer);
  const todosLoading = useSelector(state => state.moviesReducer.todosLoading);
  const currentPage = useSelector(state => state.moviesReducer.currentPage);
  const totalPages = useSelector(state => state.moviesReducer.totalPage);
  const allPage = useSelector(state => state.moviesReducer.allPage);

  const createPages = (pages, pagesCount, currentPage, allPage) =>{
    if(pagesCount > allPage) {
      if(currentPage > 5) {
        for (let i = currentPage-4; i <= currentPage+5; i++) {
          pages.push(i);
          if(i === pagesCount) break;
        }
      }
      else {
        for (let i = 1; i <= allPage; i++) {
          pages.push(i);
          if(i === pagesCount) break;
        }
      }
    }
    else {
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
    }
  };

  const pages = [];
  createPages(pages, totalPages, currentPage, allPage);

  const dispatch = useDispatch();

  const API_Key = 'b6d7e5c7703d8171d46592ce88a6025d';

  const fetchMovies = async() =>{
    try{
      dispatch(setLoadingTrue());
      const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&page=${currentPage}`);
      const data = await resp.json();
      dispatch(getMovies(data));
    }
    catch (e) {
      console.log(e.message);
    }
    finally {
      dispatch(setLoadingFalse());
    }
  };

  const fetchGenre = async() =>{
    try{
      dispatch(setLoadingTrue());
      const resp = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_Key}`);
      const data = await resp.json();
      dispatch(getGenres(data));
    }
    catch (e) {
      console.log(e.message);
    }
    finally {
      dispatch(setLoadingFalse());
    }
  };

  const clickPage = async(currentPage) =>{
    dispatch(getCurrentPage(currentPage));
  };

  useEffect(() =>{
    fetchMovies();
    fetchGenre();
  }, [currentPage]);

  return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' render={() => (<HomePage movies={movies} genres={genres} pages={pages} currentPage={currentPage} clickPage={clickPage} loadingPage={todosLoading}/>)}/>
            <Route exact path='/movies/page/:id' render={() => (<HomePage movies={movies} genres={genres} pages={pages} currentPage={currentPage} clickPage={clickPage} loadingPage={todosLoading}/>)}/>
            <Route exact path={'/movies/:id'} component={PosterPreview}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
