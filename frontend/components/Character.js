import React from 'react'
import { useState } from 'react'

function Character({person, homeworld}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not

  const [isHomeworldVisible, setIsHomeworldVisible] = useState(false);

  // ❗ Create a "toggle" click handler to show or remove the homeworld
      const toggleHomeworld = () =>  {
           setIsHomeworldVisible(!isHomeworldVisible);
      }


  return (
    <div className='character-card'  onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{person.name}</h3>
      {isHomeworldVisible &&  (
        <p>  
          Planet: <span className="character-planet"  style={{ fontWeight:  'bold'}}>{person.homeworld.name}</span>
        </p>
      )}
    </div>
  )
}

export default Character
