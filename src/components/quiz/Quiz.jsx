import "./Quiz.css"

const Quiz = () => {
  return (
    <>
      <main className="container">
        <h2>Quiz Application</h2>
        <hr />
        <h3>1. What does CSS stand for?</h3>
        <ul>
            <li>Creative Style Sheets</li>
            <li>Cascading Style Sheets</li>
            <li>Colour Style Sheets</li>
            <li>Computer Style Sheets</li>
        </ul>
        <h5 className="button">Next</h5>
        <p className="details">1 of 5 questions</p>
      </main>
    </>
  )
}

export default Quiz
