import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLodading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (
        await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
        )
      ).json();
      //const json = await reponse.json();
      console.log(json);
      setMovies(json.data.movies);
      setLodading(false);
    }
    useEffect(()=>{
      // fetch(
      //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      // )
      // .then((reponse) => reponse.json())
      // .then((json) => {
      //   setMovies(json.data.movies)
      //   setLodading(false); 
      getMovies();
      
    },[]);
    return (
      <div>
        {loading ? (
          <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map(movie =>(
                <Movie 
                  key={movie.id}
                  id = {movie.id}
                  coverImg={movie.medium_cover_image} 
                  title ={movie.title} 
                  summary={movie.summary} 
                  genres={movie.genres} 
                  year={movie.year}
                />
              ))}
              </div>
              )}
      </div>
    );

}
export default Home;