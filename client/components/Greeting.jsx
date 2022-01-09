import React, { useState, useEffect } from 'react'

function Greeting() {
const date = new Date();
const currentTime = date.getHours()

let greeting;
const customStyle = {
    color: ''
}

if (currentTime < 12){
    greeting = 'Good Morning'
    customStyle.color = '#FFCE45'
} else if (currentTime < 18) {
    greeting = 'Good Afternoon'
    customStyle.color = '#A3423C'
} else if (currentTime > 20){
    greeting = 'Good Night'
    customStyle.color = '#344CB7'
} else {
    greeting = 'Good Evening'
    customStyle.color = '#344CB7'
}


    return (
        <>
        <h2 className='greeting' style={customStyle}>{greeting}</h2>

        </>
    )
}

export default Greeting