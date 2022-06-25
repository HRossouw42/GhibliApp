// import totoro from "./bg-wave.svg";
import totoro from '../images/Totoro.png';
import poster from '../images/Poster.jpeg';

function ListMovie({ movie }) {
    return (
        <div style={{}} className="listItem">
            <img src={movie.image} alt="None" className="posterImg" />

            <h1>{movie.title}</h1>
            <p className="description">{movie.description}</p>
            <button className="btn">SEE MORE</button>
            <img src={totoro} alt="Nothing" className="bgImg" />
        </div>
    );
}

export default ListMovie;
