import React from "react";
import {CAROUSEL} from "../utils/constants";


const Carousel = ({carousaldata})=>{

    const {creativeId} = carousaldata?.data;
    // console.log(creativeId)

    return(
        <div className=" w-44">
            <div className='w-80 h-96 p-6 px-4 relative group'>
                <div>
                    <img className="h-72 w-40" src={CAROUSEL+creativeId}/>
                </div> 
            </div>
            
        </div>
    )
}

export default Carousel;