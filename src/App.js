import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import Header from "./componentes/Header";
import Timeline from "./componentes/Timeline";
import TimelineApi from "./logicas/TimelineApi";
import { timeLineReducer } from "./reducers/timeline";

const store = createStore(timeLineReducer, applyMiddleware(thunkMiddleware));

const timelineStore = new TimelineApi([]);

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header />
          <Timeline login={this.props.params.login} store={store} />
        </div>
      </div>
    );
  }
}

export default App;
