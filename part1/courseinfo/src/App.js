
  // Fonction pour calculer le total des exercices
  const totalExercises = (props) => {
    return props.reduce((sum, part) => sum + part.exercises, 0);
  };

  // Fonction pour afficher l'en-tête
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

  // Affichage global de l'application
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App