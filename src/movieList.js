import React,{useContext} from 'react'
import Movie from './Movie';
import {MovieContext} from './MovieContext';


const MovieList =()=> {
   const movies = useContext(MovieContext);
    return (
        <div>
            {
            movies[0].map(movie=>(
            <Movie name={movie.name} price={movie.price} key={movie.id}/>
                ))
            }
        </div>
    )
}
export default MovieList