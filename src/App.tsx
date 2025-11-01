import React, { useState } from 'react'
import QuizFrame from './components/QuizFrame'
import qBank from './constants/Questions'
import Button from './components/Button';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [questionState,setQuestionState] = useState<number>(0);
  const [selectedAnswer,setSelectedAnswer]=useState<string>("");
  const [score,setScore]=useState<number>(0);
  const [showResult,setShowResult] = useState<boolean>(false);
  if(questionState>=qBank.length){
    setQuestionState(0);
  }
  const currentQuestion=qBank[questionState];
  const handleClick=()=>{
    if(selectedAnswer){
     if(selectedAnswer===currentQuestion.answer){
      setScore(prev=>prev+1);
     }
    }
    else{
      toast("Plase Select Any Option");
    }
    if (questionState < qBank.length - 1) {
      setQuestionState(prev => prev + 1)
      setSelectedAnswer("")
    } else {
      setShowResult(true)
    }
  }
  const handleRestart=() : void =>{
    setQuestionState(0);
    setScore(0);
    setSelectedAnswer("");
    setShowResult(false)
  }
  return (
    <>
        <div className="rootPanel">
          <h4>Quiz Game</h4>
      {!showResult ?  <><QuizFrame question={currentQuestion}  setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer}/>
      <Button handleClick={handleClick}/></>: <div className="resultPanel">
          <h3>🎉 Quiz Completed!</h3>
          <p>Your Score: {score} / {qBank.length}</p>
          <button onClick={handleRestart} className="restartBtn">Restart Quiz</button>
        </div>}
      <ToastContainer/>
        </div>
    </>
  )
}

export default App