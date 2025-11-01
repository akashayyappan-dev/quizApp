import React, { useState } from 'react'
import QuizFrame from './components/QuizFrame'
import qBank from './constants/Questions'
import Button from './components/Button';

const App = () => {
  const [questionState,setQuestionState] = useState<number>(0);
  const [selectedAnswer,setSelectedAnswer]=useState<string>("");
  alert(selectedAnswer)
  if(questionState>=qBank.length){
    setQuestionState(0);
  }
  const currentQuestion=qBank[questionState];
  return (
    <>
        <div className="rootPanel">
          <h4>Quiz Game</h4>
      <QuizFrame question={currentQuestion}  setSelectedAnswer={setSelectedAnswer}/>
      <Button setQuestionState={setQuestionState} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer}/>
        </div>
    </>
  )
}

export default App