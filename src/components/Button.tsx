import { ToastContainer, toast } from 'react-toastify';
interface Props {
  setQuestionState: React.Dispatch<number>
  setSelectedAnswer: React.Dispatch<string>
  selectedAnswer: string
}
const Button: React.FC<Props> = ({ setQuestionState, setSelectedAnswer, selectedAnswer }) => {
  return (
    <>
      <button style={{
        padding: "3px 6px",
        background: "rgba(59, 191, 63, 1)",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer"
      }} onClick={() => {
        if (selectedAnswer) {
          setQuestionState(prev => prev + 1)
        }
        else{
          toast("Please Select Any Option");
        }
        setSelectedAnswer("");
        
      }}>Next</button>
       <ToastContainer/>
    </>
  )
}

export default Button