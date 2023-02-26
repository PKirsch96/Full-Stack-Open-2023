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
const Button = ({ onClick, text}) => <button onClick = {onClick}>{text}</button> 

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


const App = () => {
  // définitions des constantes
  const [counter, setCounter] = useState(0)

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
      <Display counter = {counter} />
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
    </>
  );
};

export default App