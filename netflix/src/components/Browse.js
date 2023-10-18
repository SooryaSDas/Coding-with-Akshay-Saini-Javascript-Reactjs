import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies"; 
import usePopularMovies from "./Hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = ()=>{
    useNowPlayingMovies();
    usePopularMovies();
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
    return(
        <div>
            <Header/>
            {showGptSearch ?  <GptSearch/> : 
                <>
                    <MainContainer/>
                    <SecondaryContainer/> 
                </> 
            }
           
            
        </div>
    )
}

export default Browse;