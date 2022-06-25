import totoro from '../images/Totoro.png';
import { Link } from 'react-router-dom';

// List of movies
function ListMovie({ movie }) {
    return (
        <div className="listItem">
            <div>
                <img src={movie.image} alt="None" className="posterImg" />
                <img src={totoro} alt="Nothing" className="bgImg" />
            </div>
            <div className="listText">
                <h1>{movie.title}</h1>
                <p className="description">{movie.description}</p>
                <Link
                    to="/see-more"
                    state={{
                        banner: `${movie.movie_banner}`,
                        title: `${movie.title}`,
                        director: `${movie.director}`,
                        date: `${movie.release_date}`,
                    }}
                >
                    <button className="btn">SEE MORE</button>
                </Link>
            </div>
        </div>
    );
}

export default ListMovie;
