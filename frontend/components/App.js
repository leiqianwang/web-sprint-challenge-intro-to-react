import React from 'react'
import axios from 'axios'
import Character from './Character'
import { useEffect } from 'react'
import { useState } from 'react'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [planet, setPlanet] = useState([]);
  const [people, setPeople] = useState([])
  // ❗ Create effects to fetch the data and put it in state

    useEffect(() => {
      async function fetchPlanets() {
           axios.get(urlPeople)
           .then(peopleResponse =>  {
                
                axios.get(urlPlanets)
                .then(planetResponse => {
                   let peopleWithPlanet = peopleResponse.data.map(person => {
                       let homeworld = planetResponse.data.find(p => p.id === person.homeworld);
                       return {...person,  homeworld};
                   });

                   setPeople(peopleWithPlanet);
                   setPlanet(planetResponse.data);
                })
                .catch(error => console.error('Error fetching planets:', error));
           })
           .catch(error => console.error('Error fetching people:', error));
      }
          fetchPlanets();
    }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    {people.map(person => (
        <Character key={person.id} person={person} homeworld={person.homeworld.name}   />
    ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
