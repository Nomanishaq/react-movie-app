import React,{useContext} from 'react'
import {MovieContext} from './MovieContext'

const Nav = ()=> {
    const movie = useContext(MovieContext);
    return (
        <div className="nav">
            <h3>Noman Ishaq</h3>
            <p>List of Movie: {movie[0].length} </p>
        </div>
    )
}
export default Nav
