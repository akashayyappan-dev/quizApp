
import './QuizFrame.css'
interface Props{
    question : {
        id:number
        question:string
        options:string[]
        answer:string
    }
    setSelectedAnswer:React.Dispatch<string>
    selectedAnswer:string
}
const QuizFrame : React.FC<Props> = ({question,setSelectedAnswer,selectedAnswer}) => {
    function handleClicK(val:string){
        setSelectedAnswer(val);
    }
  return (
    <div className='mainPanel'>
        <div className="questionNo">
            Question {question.id}
        </div>
        <div className="question">
            {question.question}
        </div>
        <div className="options">
            {question.options.map((ele,i)=>(
                <div className="eachOption">
                    <input type="radio" name="quiz" checked={selectedAnswer===ele} id={ele+"_"+i} value={ele} onChange={(e)=>{handleClicK(e.target.value)}}/>
                    <label className="optionNames" htmlFor={ele+"_"+i} >{ele}</label>
                </div>
            ))}
        </div>
    </div>
  )
}

export default QuizFrame