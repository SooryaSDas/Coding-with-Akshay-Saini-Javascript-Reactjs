import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    // for stopping unnecessary api call, 
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        // checking nowplaying movies have data then don't do api call, otherwise call the api call
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);

}

export default useNowPlayingMovies;