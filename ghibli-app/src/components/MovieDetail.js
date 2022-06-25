import banner from '../images/Banner.jpeg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function MovieDetail(props) {
    const location = useLocation();
    const { banner, title, director, date } = location.state;

    return (
        <div className="singleItem">
            <img src={banner} alt="banner" className="bannerImg"></img>
            <h1>{title}</h1>
            <h2>{director}</h2>
            <h2>{date}</h2>
            <Link to="/">
                <button className="btn">BACK</button>
            </Link>
        </div>
    );
}

export default MovieDetail;
