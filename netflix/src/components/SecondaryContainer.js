import MovieList from "./MovieList";
import {useSelector} from "react-redux"

const SecondaryContainer = ()=>{
    const movies = useSelector((store)=>store.movies)
    // console.log(movies)
    return (
        movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className="-mt-52 pl-12 relative z-20">   
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Romantic"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Popular"} movies={movies.nowPopularMovies}/>
                <MovieList title={"fantacy"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Comic Movies"} movies={movies.nowPlayingMovies}/>
            </div>
            </div>
        )
    )
}

export default SecondaryContainer;