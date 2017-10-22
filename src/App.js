import React, { Component } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import Header from "./componentes/Header";
import Timeline from "./componentes/Timeline";
import TimelineApi from "./logicas/TimelineApi";
import { timeLineReducer } from "./reducers/timeline";
import { notificacao } from "./reducers/header";

const reducers = combineReducers({ timeLineReducer, notificacao });
const store = createStore(timeLineReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header store={store} />
          <Timeline login={this.props.params.login} store={store} />
        </div>
      </div>
    );
  }
}

export default App;
