import React from 'react';

const Button = ({ label, onClick }) => (
  <button key={label} onClick={onClick}>
    {label}
  </button>
);

export default ({ state, ...actions }) => (
  <div>
    <h1>State: {JSON.stringify(state)}</h1>
    {Object.keys(actions)
      .map(label => ({ label, onClick: actions[label] }))
      .map(Button)}
  </div>
);
