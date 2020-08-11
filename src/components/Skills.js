import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <h4 style={{ marginTop: "0px" }}>{this.props.skill}</h4>
          </Cell>
        </Grid>
      </div>
    );
  }
}
