import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <StatisticLine value={good} text = 'good' />
          <StatisticLine value={neutral} text = 'neutral' />
          <StatisticLine value={bad} text = 'bad' />
          <StatisticLine value={good + neutral + bad} text = 'all' />
          <StatisticLine value={((good*1 + bad*(-1))/(good+bad+neutral)).toFixed(2)} text = 'average' />
          <StatisticLineProsent value={((good/(good+bad+neutral))*100).toFixed(2)} text = 'positive' />
        </tbody>
      </table>
    </div>
  )
}

// const StatisticLine = props => <div><tr><td>{props.text}</td><td>{props.value}</td></tr></div>

// const StatisticLineProsent = props => <div><tr><td>{props.text}</td><td>{props.value} %</td></tr></div>

const StatisticLine = props => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const StatisticLineProsent = props => <tr><td>{props.text}</td><td>{props.value} %</td></tr>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [average, setAverage] = useState(0)
  // const [positive, setPositive] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  // const findAverage = () => setAverage((good*1 + bad*(-1))/(good+bad+neutral))
  // const findPositive = () => setPositive((good/(good+bad+neutral))*100)

  return (
    <div>
      <p><b>give feedback</b></p>
      <Button handleClick={() => increaseGood()} text="good" />
      <Button handleClick={() => increaseNeutral()} text="neutral" />
      <Button handleClick={() => increaseBad()} text="bad" />
      <p><b>statistics</b></p>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      
    </div>
  )
}

export default App
