import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from "../utils/openai"
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/GptSlice';

const GptSearchBar = () => {
    const langkey = useSelector((store)=> store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    // search movie in TMDB
    const searchMovieTMDB = async(movie)=>{
        const data = await fetch ('https://api.themoviedb.org/3/search/movie?query='+ movie +'include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async ()=>{
        console.log(searchText.current.value);
        // MAKE AN API CALL TO GPI API AND GET MOVIE RESULTS
        const gptQuery = 
            "Act as a Movie Recommendation system and suggest some movie for the query : " + 
            searchText.current.value + 
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if(!gptResults.choices){
            // error handling
        }
        // andaz apna, hera pheri, chupke chupke, jaane bji do yaaro, padosan
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

        //[ "andaz apna", "hera pheri", "chupke chupke", "jaane bji do yaaro", "padosan"]

        // for each movie i will search tmdb api

        const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));
        // [promise, promise, promise, promise, promise]

        // wait for all promise to get 
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        // taking movies names and full movie array results
        dispatch(addGptMovieResult({movieNames : gptMovies, movieResults : tmdbResults}));
    }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input 
                ref={searchText}
                type="text" 
                className='p-4 m-4 col-span-9'
                placeholder={lang[langkey].gptSearchPlaceholder}
            />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>
                {lang[langkey].search}
            </button>
        </form>

    </div>
  )
}

export default GptSearchBar