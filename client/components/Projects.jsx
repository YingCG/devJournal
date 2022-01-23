import React from "react";
import SquareList from './SquareList'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <>
      <div className="page-container">
        <h3>
          A project road map on my coding practice to become full-stack developer
        </h3>
        <p>
          To Increase Effectiveness and Capacity, I also practice human-skills along side through self reflection and emotional regulation. <br/>
          </p>
        <div className="container">
          <SquareList />
        </div>
      </div>
    </>
  );
}

export default Projects;
