import React,{useState,useContext} from 'react';
import {MovieContext} from './MovieContext';


const AddMovie=()=> {

const updateName = e =>{
    setName(e.target.value);
}

const updatePrice =  e =>{
    setPrice(e.target.value);
}

const [name, setName]= useState();
const [price,setPrice] = useState();
const movie = useContext(MovieContext);

const addmovie = e =>{
    e.preventDefault();
    movie[1](prevMovies => [...prevMovies,{name: name, price: price,id: Math.random()}]);
    setName('');
}

    return (
        <div>
            <form onSubmit={addmovie}>
                <input type="text" placeholder="Movie Name" onChange={updateName} name={name} required/><br/>
                <input type="number" placeholder="Price" onChange={updatePrice}  name={price} required/><br/><br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default AddMovie;