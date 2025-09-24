import api from "../api/axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function MovieDetail() {

    const {id} = useParams();
    const [movie,setMovie] = useState(null)
    useEffect(()=>{
        async function getMovieDetails() {
            const res = await api.get(`${id}`);
            setMovie(res.data)
        }
        getMovieDetails()
    },[id]) /* 의존성 배열의 값이 바뀔 때 실행 */
    if(!movie){
        return <div className="min-h-screen bg-black text-white flex-item-center justify-center">Loading...</div>
    }
    //영화상세정보
    return(
        <div className="min-h-screen bg-black text-white p-4">
            <div className="container mx-auto py-8">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full md:w-1/3 rounded-lg" />
                <div className="flex flex-col gap-8 md:flex-row">
                </div>
            </div>
        </div>
    )
    
}