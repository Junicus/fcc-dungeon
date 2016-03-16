// NOTE: Set JavaScript Preprocessor to Babel
// Add the following external JavaScript links:
// https://fb.me/react-0.14.7.min.js
// https://fb.me/react-dom-0.14.7.min.js

import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div >
                <div>Hello World!</div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app'));
