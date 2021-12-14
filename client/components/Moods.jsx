import React from 'react'

function getMood () {
  const moods = ['Happy', 'Hungry', 'Silly', 'Quiet', 'Paranoid']
  return moods[Math.floor(Math.random() * moods.length)]
}

class Mood extends React.Component {
  render () {
    const mood = getMood()
    return (
      <div>
        <h2>My current mood is : {mood} </h2>
        <p>{mood === 'Happy' ? 'I made it!' : 'Talk to the rubber duck, and keep trying! '}</p>
      </div>
    )
  }
}

export default Mood
