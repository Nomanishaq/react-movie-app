import React,{useState,useContext} from 'react';
import {MovieContext} from './MovieContext';


const AddMovie=()=> {
    
    let [name, setName]= useState();
    let [price,setPrice] = useState();
    let movie = useContext(MovieContext);
    
    const updateName = e =>{
        setName(e.target.value);
        
    }
    
    const updatePrice =  e =>{
        setPrice(e.target.value);
    }

const addmovie = e =>{
    e.preventDefault();
    movie[1](prevMovies => [...prevMovies,{name: name, price: price,id: Math.random()}]);    
}

    return (
        <div>
            <form onSubmit={addmovie}>
                <input type="text" placeholder="Movie Name"  onChange={updateName} name={name} required/><br/>
                <input type="number" placeholder="Price" onChange={updatePrice}  name={price} required/><br/><br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default AddMovie;