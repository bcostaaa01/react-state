import { useState } from "react";
import React from "react";

const Person = () => {
  const [person, setTraits] = useState({
    talk: "talkative",
    think: "thoughtful",
  });

  const updatePerson = () => {
    setTraits((prevState) => {
      return {
        ...prevState,
        talk: "silent",
      };
    });
  };

  const [laptop, setTechnicalDetails] = useState({
      ram: '8GB',
      brand: 'Lenovo',
      color: 'black'
  })

  const updateLaptop = () => {
      setTechnicalDetails((prevState) => {
          return {
              ...prevState,
              brand: 'Apple',
              color: 'Light grey'
          };
      });
  };

  const [woonplats, setWoonplats] = useState('Europe');

  const updateWoonplats = () => {
      setWoonplats((woonplats) => {
return woonplats = 'Oceania'
      })
  }

  return (
    <>
      <p>I am {person.talk}</p>
      <button onClick={updatePerson}>Update Person</button>
      <p>I have a {laptop.color} {laptop.brand}</p>
      <button onClick={updateLaptop}>Update Laptop</button>
      <p>I live in {woonplats}</p>
      <button onClick={updateWoonplats}>Update woonplats</button>
    </>
  );
};

const MemoizedComponent = React.memo(Person);

export default MemoizedComponent;
