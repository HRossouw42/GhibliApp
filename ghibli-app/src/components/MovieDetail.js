import banner from '../images/Banner.jpeg';

function MovieDetail() {
    return (
        <div className="singleItem">
            <img src={banner} alt="banner" className="bannerImg"></img>
            <h1>Title</h1>
            <h2>Director</h2>
            <h2>Release Date</h2>
            <button className="btn">BACK</button>
        </div>
    );
}

export default MovieDetail;
