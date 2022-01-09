import React from "react";
import SquareList from "./SquareList";

function Stories() {

    function storyStyle() {
        const pallete = ['#FCF9EA','#BADFDB', '#F8A978','#FFC5A1','#F3F8FF', '#DEECFF', '#C6CFFF', '#E8D3FF']
        return pallete[Math.floor(Math.random() * pallete.length)]
      }



  return (
    <>
      <div className="page-container">
<h2>B.Y.O. Cup Corner</h2>
          <h3>Some human skills I practice to code along.</h3>
        {/* <div className="stories square-list">
          <div className="square" style={{ backgroundColor: storyStyle() }}>
          
        </div>

        <div className="square" style={{ backgroundColor: storyStyle() }}>
        </div>

        <div className="square" style={{ backgroundColor: storyStyle() }}>
        </div>

        <div className="square" style={{ backgroundColor: storyStyle() }}>
        </div>

        <div className="square" style={{ backgroundColor: storyStyle() }}>
        </div>

        <div className="square" style={{ backgroundColor: storyStyle() }}>
        </div>

        <div className="square" style={{ backgroundColor: storyStyle() }}>
        </div>

        <div className="square" style={{ backgroundColor: storyStyle() }}>
        </div>

        <div className="square" style={{ backgroundColor: storyStyle() }}>
        </div>

        <div className="square" style={{ backgroundColor: storyStyle() }}>
        </div>
        </div> */}
      </div>
    </>
  );
}

export default Stories;
