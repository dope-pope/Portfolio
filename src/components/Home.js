import React from "react";
import "../App.css";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
  faPython,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="home">
        <Cell col={12}>
          <div>
            <img src="pol.jpg" alt="myavtar" className="image1" />
          </div>
        </Cell>

        <div className="box">
          <h1>Student</h1>
          <hr />

          <p> Ionic | HTML | CSS | React | NodeJS | Express | Bootstrap</p>
          <div className="home-icons">
            <a href="https://github.com/" target="_blank">
              <span className="space">
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <span className="space">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <span className="space">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </a>
            <a href="https://www.python.org/" target="_blank">
              <span className="space">
                <FontAwesomeIcon icon={faPython} />
              </span>
            </a>
          </div>
        </div>
      </Grid>
    </div>
  );
}
