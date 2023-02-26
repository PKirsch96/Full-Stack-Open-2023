import { useState } from "react"
//Fonction qui retourne une phrase de bienvenue et devinne l'année de naissance
const Hello = ({name, age}) =>{
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return(
    <div>
      <p>
        Hello {name}. You are {age} years old
      </p>
      <p>So you were probably born in {bornYear()} </p>
    </div>
  )
}

//affiche l'etat du conteur de click
const Display = ({counter}) => <div> {counter} </div>

//parametre la fonction des boutans
const Button = ({ handleClick, text}) => <button onClick = {handleClick}> {text} </button> 

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

  // Fonction pour afficher les parties du cours
const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
   );
};

  // Fonction pour afficher le total des exercices
const Total = (props) => {
  let somme = 0;
  props.parts.forEach((part) => {
    somme += part.exercises;
  });
  return "Number of exercises : " + somme;
};

const History = (props) => {
  if (props.allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join("  ")}
    </div>
  )
}

const App = () => {
  // définitions des constantes
  const [counter, setCounter] = useState(0)

  const [left, setLeft] = useState(0)

  const [right, setRight] = useState(0)
  
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1 )
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1 )
  }

  const increaseByOne = () => setCounter(counter + 1)

  const setZero = () => setCounter(0)

  const decreaseByOne = () => setCounter(counter - 1)

  const course ={ 

    name: "Half Stack application development",

    parts: [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]
};

console.log("rendering ...", counter)

  // Affichage global de l'application
  return (
    <>
    <div>
      <Hello name="paul" age = '27' />
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    <div>
      <p>Conteur : </p><Display counter = {counter} />
    </div>
    <div>
      <Button
        onClick = {increaseByOne}
        text = "plus"
      />
      <Button
        onClick = {setZero}
        text = "zero"
      />
      <Button
        onClick = {decreaseByOne}
        text = "minus"
      />
    </div>
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks = {allClicks} />
    </div>
    </>
  );
};

export default App