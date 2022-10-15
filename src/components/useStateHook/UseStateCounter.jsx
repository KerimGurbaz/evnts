import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const [person, setPerson] = useState({
    name: "Kerim",
    surname: "Gurbaz",
    age: 35,
  });
  console.log(person);

  const inc = () => {
    setCount(count + 1);
  };

  const incAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  return (
    <div className="container text-center mt-4">
      <section>
        <h1>USESTATE HOOK</h1>

        <h2 className="display-4 text-danger">COUNT:{count}</h2>
        <button onClick={inc} className="btn btn-success">
          INC
        </button>

        <button onClick={() => setCount(0)} className="btn btn-dark">
          clear
        </button>

        <button onClick={() => setCount(count - 1)} className="btn btn-danger">
          DEC
        </button>
      </section>
      <section>
        <h1>USESTATE OBJECT</h1>
        <h2>{person.name}</h2>
        <h3>{person.surname}</h3>
        <h3>{person.age}</h3>
        <button onClick={incAge} className="btn btn-info">
          inc age
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
