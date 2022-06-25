import ListMovie from './components/ListMovie';
import MovieDetail from './components/MovieDetail';
import { useState, useEffect } from 'react';
// https://ghibliapi.herokuapp.com/

function App() {
    const [movies, setMovies] = useState([
        {
            id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
            title: 'Castle in the Sky',

            image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
            movie_banner:
                'https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg',
            description:
                "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
            director: 'Hayao Miyazaki',
            release_date: '1988',
        },
        {
            id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
            title: 'Grave of the Fireflies',
            image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg',
            movie_banner:
                'https://image.tmdb.org/t/p/original/vkZSd0Lp8iCVBGpFH9L7LzLusjS.jpg',
            description:
                'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.',
            director: 'Isao Takahata',
            release_date: '1988',
        },
    ]);

    useEffect(() => {
        const getMovies = async () => {
            const moviesFromServer = await fetchMovies();
            setMovies(moviesFromServer);
        };

        getMovies();
        console.log(movies);
    }, []);

    // Getting movies from Ghibli API
    const fetchMovies = async () => {
        const res = await fetch(
            'https://ghibliapi.herokuapp.com/films?fields=id,title,description,image,movie_banner,director,release_date&limit=5'
        );
        const data = await res.json();

        console.log(data);
        return data;
    };

    return (
        <div className="container">
            {movies.map((movie) => {
                return <ListMovie key={movie.id} movie={movie} />;
            })}
            <MovieDetail />
        </div>
    );
}

export default App;
