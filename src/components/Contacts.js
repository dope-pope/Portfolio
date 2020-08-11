import React from "react";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
  faPython,
  faInstagram,
  faPhoenixSquadron,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  return (
    <div className="contacts-main">
      <Grid className="contact-grid">
        <Cell col={6}>
          <div className="cell1">
            <img src="pol.jpg" alt="myavtar" className="image1" />
            <p className="cell1-p" align="center">
               Vikas Kumar
            </p>
          </div>
        </Cell>

        <Cell col={6} className="cell2">
          <div>
            <p align="center" className="cell2-p">
              Wanna Get in touch??
            </p>
            <table cellSpacing="30">
              <tr>
                <td className="table-1">
                  <span className="space">
                    <FontAwesomeIcon icon={faPhoneSquare} />
                  </span>
                </td>
                <td>
                  <font size="4"> 9621061366</font>
                </td>
              </tr>
              <tr>
                <td className="table-1">
                  <span className="space">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </span>
                </td>
                <td>
                  <font size="4">Vikas Kumar</font>
                </td>
              </tr>
              <tr>
                <td className="table-1">
                  <span className="space">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </td>
                <td>
                  <font size="4"> vikas.kumar8604@gmail.com</font>
                </td>
              </tr>
            </table>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contacts;
