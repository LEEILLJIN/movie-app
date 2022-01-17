import { useEffect } from "react";
import {useParams} from "react-router-dom"
import { useState } from "react/cjs/react.development";
import Detail_d from "../components/Detail_d";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [details, setDetail] = useState({});
    const {id}= useParams();//useParams 함수를 사용하면 React Router는 바로 이 변수(url안에 포함된 변수)의 값을 넘겨준다.
    const getMovie = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setDetail(json.data.movie);
        console.log(json.data.movie);
        setLoading(false);
    };
    
    useEffect(()=>{
        getMovie();
    },[]);
    return(
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    
                        <Detail_d
                            key={details.id}
                            id = {details.id}
                            coverImg={details.medium_cover_image} 
                            backImg={details.background_image} 
                            title ={details.title} 
                            descrip={details.description_full} 
                            genres={details.genres} 
                            year={details.year}
                            rating={details.rating}
                            runtime={details.runtime}
                        />
                    
                </div>
            )}
        </div>
    );
}
//npm i react-router-dom@5.3.0 했음
export default Detail;