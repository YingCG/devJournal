import React from "react";
import SquareList from "./SquareList";
import Yet from "./Yet";

function Stories() {

    function storyStyle() {
        const pallete = ['#FCF9EA','#BADFDB', '#F8A978','#FFC5A1','#F3F8FF', '#DEECFF', '#C6CFFF', '#E8D3FF']
        return pallete[Math.floor(Math.random() * pallete.length)]
      }



  return (
    <>
      <div className="page-container">
          <h2>B.Y.O. Cup Corner</h2>
          <p>Here are some human skills I get inspired. I am practicing with check-list format while I code along.</p>

        <div className="stories square-list">
          <div className="square" style={{ backgroundColor: storyStyle() }}> <Yet/></div>

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
        </div>

      </div>
    </>
  );
}

export default Stories;
