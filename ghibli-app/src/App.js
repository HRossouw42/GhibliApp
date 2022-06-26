import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListMovie from './components/ListMovie';
import MovieDetail from './components/MovieDetail';

function App() {
    // State object
    const [movies, setMovies] = useState([
        {
            id: '0',
            title: '',
            image: '../images/Poster.jpeg',
            movie_banner: '../images/Banner.jpeg',
            description: '',
            director: '',
            release_date: '',
        },
    ]);

    // Fetch before page load
    useEffect(() => {
        const getMovies = async () => {
            const moviesFromServer = await fetchMovies();
            setMovies(moviesFromServer);
        };

        getMovies();
    }, []);

    // Getting movies from Ghibli API
    const fetchMovies = async () => {
        const res = await fetch(
            'https://ghibliapi.herokuapp.com/films?fields=id,title,description,image,movie_banner,director,release_date&limit=5'
        );
        const data = await res.json();

        console.log('fetched from API:', data);
        return data;
    };

    return (
        // <>
        // {/* <h1>Ghibli movie App</h1> */}
        // <Router>
        <div className="container">
            <Routes>
                <Route
                    path="/"
                    element={movies.map((movie) => {
                        return <ListMovie key={movie.id} movie={movie} />;
                    })}
                />
                <Route path="/see-more" element={<MovieDetail />} />
            </Routes>
        </div>
        // </Router>
        // </>
    );
}

export default App;
