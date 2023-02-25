const Hello = () => {
  return(
    <div>
      <p>Hello World</p>
    </div>
  )
}



const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return (
    <div>
      <p>Greetings</p>
      <Hello />
      <Hello />
    </div>
  )
}
export default App