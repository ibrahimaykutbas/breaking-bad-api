import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import { Switch, Route } from "react-router-dom";

import Navi from "./components/Navi";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Detail from "./pages/Detail";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12">
            <Navi />
          </Col>
          <Col xs="12">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/quotes" component={Quotes} />
              <Route path="/char/:name" component={Detail} />
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}
