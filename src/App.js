import React, { Fragment } from "react";

import Provider from "./provider";

import Context from "./context";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Agent Info : {context.data.agent}</h3>
          <p>Mission Name : {context.data.mname}</p>
          <p>Status: {context.data.accept}</p>
          <button onClick={context.isMissionAccepted}> Click To Accept </button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
