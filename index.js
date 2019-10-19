import { h, render, Component } from 'preact';
import MyComponent from './components/my-component.jsx';

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

render(<MyComponent />, rootElem);
