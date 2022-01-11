import React from 'react'
import Growth from './Growth'

function Yet () {

    return(
        <>
        <div className="yet">
                <form className="checkForm">
                <h4>The power of YET</h4>
                    <input type="checkbox" className="chkboxarray"  />I can't do this ... YET<br />
                    <input type="checkbox" className="chkboxarray" />It doesn't work ... YET<br />
                    <input type="checkbox" className="chkboxarray" />I don't know ... YET<br />
                    <input type="checkbox" className="chkboxarray" />It doesn't make sense ... YET<br />
                    <input type="checkbox" name="chkboxarray" />It don't get it ... YET<br />
                    <input type="checkbox" className="chkboxarray" />I am not good at this ... YET<br />
                <button className='checkForm btn'>Read more</button>
                </form>
            </div>
        </>
    )
}

export default Yet