import { h, render, Component } from 'preact';

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

const rootElem = document.createElement('div');
// rootElem.innerHTML = `<button>hi i am button</button>`
document.body.appendChild(rootElem);

const MyComponent = () => {
  return (
    <div>what a component</div>
  );
};

render(<MyComponent />, rootElem);
