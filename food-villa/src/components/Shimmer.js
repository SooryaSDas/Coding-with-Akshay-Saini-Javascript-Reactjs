const Shimmer = ()=>{
    return(
        <div className="shimmer-container">
           {
            Array(12).fill("").map((e,index)=>(
                <div key={index} className="shimmer-cards"></div>
            ))
           }          
        </div>
    );
};

export default Shimmer;