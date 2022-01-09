import React from 'react'
import Ascii from './Ascii'
import Greeting from './Greeting'


function Home () {
  return (
    <>
      <div className="page-container">
        <Ascii />
        <h1><Greeting /> </h1>
        <p>
        Welcome to my coding journal. Programming is a universe itself yet to discover... <br />
        Here, I am tracking my growth as a developer. To write down how and why I solved coding problems every day, and reveal hurdles in my workflow.
        I am having so much in this learning journey! ((  ͡• ʖ  ͡• )) 
        </p>
      </div>
    </>
  )
}

export default Home
