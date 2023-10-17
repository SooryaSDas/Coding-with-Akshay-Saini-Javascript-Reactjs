import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies"; 
import usePopularMovies from "./Hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = ()=>{
    useNowPlayingMovies();
    usePopularMovies();
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;