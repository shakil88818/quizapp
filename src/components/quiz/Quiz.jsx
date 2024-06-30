
import { useRef, useState } from "react"
import "./Quiz.css"
import { Data } from "../../assets/Data"

const Quiz = () => {

  let [index, setIndex] = useState(0)
  let [question, setQuestion] = useState(Data[index])
  let [lock, setLock] = useState(false)
  let [score, setScore] = useState(0)
  let [result, setResult] = useState(false)

  const option1 = useRef(null)
  const option2 = useRef(null)
  const option3 = useRef(null)
  const option4 = useRef(null)

  const option_array = [option1, option2, option3, option4]

  const checkAns = (e,ans)=>{
    if(lock === false){
      if(question.ans === ans){
        e.target.classList.add("correct")
        setLock(true)
        setScore((prev)=>prev+1)
      }else{
        e.target.classList.add("wrong")
        setLock(true)
        option_array[question.ans-1].current.classList.add("correct")
      }
    }
  }

  const next=()=>{
    if(lock === true){
      if(index === Data.length-1){
        setResult(true)
        return 0;
      }
    }
    if(lock === true){
      setIndex(++index)
      setQuestion(Data[index])
      setLock(false)
      option_array.map((option)=>{
        option.current.classList.remove("wrong")
        option.current.classList.remove("correct")
      })
      return null;
    }
  }


  const reset = ()=>{
    setIndex(0)
    setQuestion(Data[0])
    setScore(0)
    setLock(false)
    setResult(false)
  }
  return (
    <>
      <main className="container">
        <div className="top-content">
          <h2>Quiz Application</h2>
          <p>{index+1} of {Data.length} questions</p>
        </div>
        <hr />
        {result? <></> : <>
          <h3>{index+1}. {question.question}</h3>
          <ul>
              <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
              <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
              <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
              <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
          </ul> 
          <h5 onClick={next} className="button">Next</h5>
          
        </>}
        
        {result? <>
          <h3 style={{textAlign: "center"}}>You Scored {score} Out of {Data.length}</h3>
          <button onClick={reset} className="button">Reset</button>
        </>: <></>}
      </main>
    </>
  )
}

export default Quiz
