import React from 'react'

function GrowthMind () {

    return(
        <>
        <div className="GrowthMind">
                <form className="checkForm">
                <h4>Growth Mindset Self-checklist</h4>
                    <input type="checkbox" className="chkboxarray"  />I can't do this ... YET<br />
                    <input type="checkbox" className="chkboxarray" />It doesn't work ... YET<br />
                    <input type="checkbox" className="chkboxarray" />I don't know ... YET<br />
                    <input type="checkbox" className="chkboxarray" />It doesn't make sense ... YET<br />
                    <input type="checkbox" name="chkboxarray" />It don't get it ... YET<br />
                    <input type="checkbox" className="chkboxarray" />I am not good at this ... YET<br />
                <button className='checkForm btn'>Read more</button>
                </form>
                <p>        To feed my brain with the power of YET. It help me to try to discover my own learning pattern when I experience confusion, frustration, lack of context. 
        Practing make perfect, by willingness to learn and practice. To take a step back and look at the same challenge from an alternative perspective.</p>
            </div>
        </>
    )
}

export default GrowthMind