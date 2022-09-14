import React from 'react';

function getUsers() {
  fetch('/dist/subscribers')
  .then(data => data.json())
  .then(data => {
    console.log('subscribers')
  })
}


export function App() {
  return (
    <div>
      <h1>Welcome { new Date().toString() }</h1>
      <button onClick={getUsers}>Click me!</button>
    </div>
  );
}