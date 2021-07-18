import MoviesList from "../moviesList/MoviesList";
import './moviesListCard-style.css';
import {useHistory} from "react-router-dom";

export default function MoviesListCard( {movies:{results}, genres, switchTheme, setGenres, genreSelected }){

    const history = useHistory();

    const handleChange = (e) =>{
        const {id, name} = JSON.parse(e.target.value);
        if(id === 'All'){
            history.push(`/`);
        }
        else {
            history.push(`/movies?sortedBy=${name}`);
        }
        setGenres({id, name});
    }

    return (
        switchTheme === 'Light' ?
            (
                <section className="section__movie-list--light">
                    <div style={{display: "flex", justifyContent: "Center", paddingTop: "15px"}}>
                        <select onChange={handleChange}>
                            <option>{genreSelected.name}</option>
                            {!genres.genres.find(item => item.id === 'All' && item.name === 'All') && genres.genres.unshift({id: 'All', name: 'All'})}
                            {
                                genres.genres.map(item => genreSelected.name !== item.name && <option value={JSON.stringify({id: item.id, name: item.name})} key={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="wrapper-section">
                        {
                            results && results.map((movie, index) => (<MoviesList movie={movie} key={movie.id} count={index} genres={genres} switchTheme={switchTheme}/>))
                        }
                    </div>
                </section>
            )
            :
            <section className="section__movie-list--dark">
                <div style={{display: "flex", justifyContent: "Center", paddingTop: "15px"}}>
                    <select onChange={handleChange}>
                        <option>{genreSelected.name}</option>
                        {!genres.genres.find(item => item.id === 'All' && item.name === 'All') && genres.genres.unshift({id: 'All', name: 'All'})}
                        {
                            genres.genres.map(item => genreSelected.name !== item.name && <option value={JSON.stringify({id: item.id, name: item.name})} key={item.id}>{item.name}</option>)
                        }
                    </select>
                </div>
                <div className="wrapper-section">
                    {
                        results && results.map((movie, index) => (<MoviesList movie={movie} key={movie.id} count={index} genres={genres} switchTheme={switchTheme}/>))
                    }
                </div>
            </section>
    )
}
