const Shimmer = ()=>{
    return(
        <div>
            <div className="w-full h-96 bg-gray-400"></div>
            <div className="flex flex-wrap">
           {
            Array(12).fill("").map((e,index)=>(
                <div key={index} className="w-52 h-80 m-5 bg-gray-400"></div>
            ))
           }          
        </div>
        </div>
    );
};

export default Shimmer;