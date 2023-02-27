import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) =>{
  return(
    <div>
      {props.text} : {props.value} {props.pourcentage} 
    </div>
  )
} 

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = bad + good + neutral
  const average = (good - bad) / (bad + good + neutral)
  const positive = good * 100 / (bad + good + neutral)
  let count = 0
  const reset = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }
  if(good === 0 && bad === 0 && neutral === 0){
    return (
      <>
      <div>
        <h1>Give feedback</h1>
        <br />
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <div>
        <h1>Statistics</h1>
        <h2>No feedback given</h2>
      </div>
      </>
    )
  }

  return(
    <>
      <div>
        <h1>Give feedback</h1>
        <br />
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        <Button handleClick={() => reset()} text="reset" />

      </div>
      <div>
        <h1>Statistics</h1>
        <br />
        <br />
        <StatisticLine text = "good" value = {good} count = {count + 1} />
        <StatisticLine text = "neutral" value = {neutral} count = {count + 1} />
        <StatisticLine text = "bad" value = {bad} count = {count + 1}/>
        <br />
        <StatisticLine text = "all" value = {all} count = {count + 1}/>
        <StatisticLine text = "average" value = {average} count = {count + 1}/>
        <StatisticLine text = "positive" value = {positive} pourcentage = "%" count = {count + 1}/>
      </div>
    </>
  )
}

export default App

