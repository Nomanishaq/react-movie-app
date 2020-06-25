import React,{useState,createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider =(props)=> {
 const [movie,setMovie] = useState([
    {
        name: 'Harry Potter',
        price: '10',
        id:12

    }
 ]);
 
    return (
        <div>
     <MovieContext.Provider value={[movie,setMovie]}>
         {props.children}
    </MovieContext.Provider>       
        </div>
    )
}
