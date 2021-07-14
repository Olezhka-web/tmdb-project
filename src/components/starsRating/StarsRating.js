import {useState} from "react";
import './stars-style.css';
import StarRating from 'react-star-ratings';
import React from "react";

export default function StarsRating({ rating }) {

    const [newRating, changeRating] = useState(rating - 6);
    // use minus 6 because from tmdb return data from 10
    // stars, or also I can use 4 * rating / 10

    class Foo extends React.Component {
        changeRating( newRating, name ) {
            changeRating(newRating);
        }

        render() {
            return (
                <StarRating
                    rating={newRating}
                    starRatedColor="#b9cb41"
                    changeRating={this.changeRating}
                    numberOfStars={4}
                    name='rating'
                    starDimension="18px"
                    starSpacing="2px"
                />
            );
        }
    }

    class Bar extends React.Component {
        render() {
            return (
                <StarRating
                    rating={newRating}
                    starDimension="10px"
                    starSpacing="15px"
                />
            );
        }
    }

    return(
        <div>
            <Foo/>
        </div>
    )
}
