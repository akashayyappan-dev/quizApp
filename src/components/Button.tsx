import type React from "react"


interface Props{
  handleClick:React.Dispatch<void>
}
const Button : React.FC<Props> = ({handleClick}) => {
  return (
    <>
      <button style={{
        padding: "3px 6px",
        background: "rgba(59, 191, 63, 1)",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer"
      }}
      onClick={()=>handleClick()}>Next</button>
    </>
  )
}

export default Button