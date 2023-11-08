import './App.css'
import {useState, useEffect} from "react"

function App() {

  const [randum, setRandum] = useState()
  const [guessNum, setGuessNum] = useState();
  const [score, setScore] = useState(20);  
  const [higherscore, setHigherScore] = useState(0);
  const [message, setMessage] = useState("Start Guessing...");
  const [numdis, setNumDis] = useState("?")

  const again = ()=>{
    setScore(20);
    setMessage("Start Guessing...");
    setNumDis("?");
    document.body.style.backgroundColor = "black";
    setGuessNum()
  }

  useEffect(()=>{
    const srtnumber = setRandum(Math.trunc(Math.random()*20) + 1);
    // console.log(randum)
  },[])

  console.log(randum)
 
  function checkValue(e){
    e.preventDefault();
    console.log(guessNum)
    // alert(guessNum)

    if(guessNum == randum){
      console.log("yes its same number");
      setMessage("yessss it's correct...");
      setNumDis(randum);
      document.body.style.backgroundColor = "green"
      if(score > higherscore){
        setHigherScore(score)

      }
    }
     else{
      console.log("sorry")
      if(score > 1){
        setMessage(guessNum > randum ? "It's too high..." : "It's too low");
        setScore(score-1);
      
      }
      else{
        setMessage("You lost this game")
        setScore(0)
        document.body.style.backgroundColor = "red"
      }
    }

  }


  

  return (
    <div className="App">
      <header>
        <h1>Guess my number!</h1>
        <p className='between'>(Between 1 and 20)</p>
        <button className='btn again' onClick={again}>Again!</button>
        <div className='number'>{numdis}</div>
      </header>
      <main>
        <form className='left' onSubmit={checkValue}>
          <input type="number" className='guess' value={guessNum} onChange={(e)=>setGuessNum(e.target.value)} />
          <button className='btn check' type='submit' >Check!</button>
        </form>
        <section className='right'>
          <p className='message'>{message}</p>
          <p className='label-score'>Score : <span className='score'>{score}</span> </p>
          <p className='label-highscore'>Highscore : <span className='highscore'>{higherscore}</span> </p>
        </section>
      </main>
    </div>
  );
}

export default App;
