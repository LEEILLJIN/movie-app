import PropTypes from "prop-types";
import "../detail_d.css";
function Detail_d({rating, runtime, backImg, coverImg, title, summary, genres, year, id, descrip}){
    return(
        <div className="detail">
            <img src={backImg} alt={title} id="bgimg"></img>
            <img src={coverImg} alt={title}></img>
            <h2 className="detail_title">
                {title}
            </h2>
            <h4 className="detail_year">{year}</h4>
            <h5 className="detail_rating">Rating : {rating}/10</h5>
            <h5 className="detail_runtime">Runtime : {runtime} Min</h5>
            <ul className="detail_genres">
            {genres.map((g)=>(
                <li key={g}>{g}</li>
            ))}
            </ul>
            <p className="detail_descrip">{descrip}</p>
      
        </div>
    );
}

Detail_d.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    backImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    year : PropTypes.number.isRequired,
    descrip : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    runtime : PropTypes.number.isRequired
};

export default Detail_d;