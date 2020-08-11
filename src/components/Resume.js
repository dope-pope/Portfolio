import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img src="pol.jpg" alt="avatar" style={{ height: "200px" }} />
          </div>
          <h2 style={{ paddingTop: "2em", color: "grey" }}> Vikas Kumar</h2>
          <h4 style={{ color: "grey" }}> Programmer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
                      I am Vikas, currently studying in 3rd year in Pune University. I am 
                      well versed with Data Structures and Algorithms.
                      I also have a good knowledge of HTML, CSS, Bootstrap, react, node and 
                      can do programming in different languages such as JavaScript, C, C++.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Address</h5>
          <p>Rajlaxmi Hostel,Wagholi, Pune</p>
          <h5>Mobile</h5>
          <p>+91 9621061366</p>
          <h5>Email</h5>
          <p>vikas.kumar8604@gmail.com</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Cell>
        <Cell
          className="resume-right-col"
          col={8}
          style={{ borderRadius: "2em" }}
        >
          <h2>Education</h2>
          <Education
            startYear={2004}
            endYear={2016}
            schoolName="Army Public School"
          />
          <Education
            startYear={2016}
            endYear={2018}
            schoolName="Army Public School"
          />
          <Education
            startYear={2018}
            schoolName="G.H.Raisoni institute of engineering and technology"
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Skills</h2>
          <Skills skill="HTML CSS" />
          <Skills skill="React JS" />
          <Skills skill="Express" />
          <Skills skill="JavaScript" />
          <Skills skill="NodeJS" />
          <Skills skill="Bootstrap" />
        </Cell>
      </Grid>
    </div>
  );
};

export default Resume;
