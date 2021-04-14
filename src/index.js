import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from "react-dom";
import './css/index.css';
import App from './components/App';
// import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css';


// // eslint-disable-next-line no-unused-vars
// class Main extends React.Component {

//   // render () {
//   //   return (
//   //     <App />
//   //   );
//   // }

// }

// render(<App />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();