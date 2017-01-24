import React from 'react'

const LetterHead = props => {
  return(
    <div>
    <img width='200' height='200' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png'/>
    <h1>HOGWARTS SCHOOL OF</h1>
    <h1>WITCHCRAFT AND WIZARDRY</h1>
    <h3>Headmaster: Albus Dumbledore</h3>
    <h5>(Order of Merlin, First Class, Grand Sorc, Chf Warlock,</h5>
    <h5>Supreme Mugwump, International Confed of Wizards)</h5>
    <br/>
      <p>Dear {props.person}</p>
    </div>
  )
}

export default LetterHead
