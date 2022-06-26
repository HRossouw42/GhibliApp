import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Further detail when movie is selected from list
function MovieDetail() {
    // Props gotten from parent Link's state object
    const location = useLocation();
    const { banner, title, director, date } = location.state;

    console.log('Further detail for movie: ', title);
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
