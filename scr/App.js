import { useState, useEffect } from 'react';
import SearchMovie from './components/SearchMovie';
import MovieList from './components/MovieList';
import Footer from './Footer';

function App() {
   const [movies, setMovies] = useState([]);
   const [searchTitle, setSearchTitle] = useState('qwertyuiop');
   
   const API_KEY = "d00f2bb6";
   const url = `http://www.omdbapi.com/?s=${searchTitle}&apikey=${API_KEY}`;

   const getMovieRequest = async () => {
      try {
         const response = await fetch(url);
         const result = await response.json();
         console.log(result);
         if (result.Response === 'True') {
            setMovies(result.Search);
         }
      } catch (error) {
         console.log(error);
      }

   };

   function handleClick() {
      getMovieRequest(searchTitle);
   }

   useEffect(() => {
      getMovieRequest();
   }, []);


   return (
      <div className='App'>
         <h1 style={{ color: 'blue' }}>Welcome to Movie Search</h1>
         <SearchMovie searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
         <button type="submit" onClick={handleClick} className='button'>Search</button>
         <MovieList movies={movies} />
         <Footer />
      </div>
   );
}

export default App;
