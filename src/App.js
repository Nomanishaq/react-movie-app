import React from 'react';
import './App.css';
import MovieList from './movieList';
import Nav from './nav';
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext';

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav/>
      <AddMovie/>
   <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App;
