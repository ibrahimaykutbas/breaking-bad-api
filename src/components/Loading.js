import React, { Component } from "react";

import { Spinner } from "reactstrap";

export default class Loading extends Component {
  render() {
    return (
      <div style={{ padding: "20px 0 10px 0", textAlign: "center" }}>
        <Spinner
          style={{ width: "3rem", height: "3rem" }}
          color="primary"
          type="grow"
        />
      </div>
    );
  }
}
