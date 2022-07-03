import totoro from '../images/Totoro.png';
import bgwave from '../images/Bgwave.svg';
import { Link } from 'react-router-dom';

// List of movies
function ListMovie({ movie }) {
    return (
        <div className="listContainer">
            <div className="listPosterItem">
                <img src={movie.image} alt="None" className="posterImg" />
                {/* <img src={bgwave} alt="None" className="posterImg" /> */}
            </div>
            <div className="listTextItem ">
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
            <img src={totoro} alt="Nothing" className="bgImg" />
        </div>
    );
}

export default ListMovie;
