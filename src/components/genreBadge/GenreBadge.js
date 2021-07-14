import {useEffect, useState} from "react";
import './Genre-style.css'

export default function GenreBadge({ movie: {genre_ids}, genres: {genres} }){

    const [genresArr, setGenresArr] = useState();

    useEffect(() =>{
        const arr = [];
        genre_ids.map((item_id) => {
            genres.map((item_name) => {
                if(item_id === item_name.id){
                    arr.push(item_name.name);
                }
            })
        })
        setGenresArr(arr);
    }, []);

    return(
        <div className="genres">
            {
                genresArr && genresArr.map((item, index) => index === genresArr.length - 1 ? <div key={index}>{item}</div> : <div key={index}>{item},&nbsp;</div>)
            }
        </div>
    )
}
