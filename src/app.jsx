// NOTE: Set JavaScript Preprocessor to Babel and add the 2 external scritps
import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// -----------COPY CODE BELOW THIS LINE ONLY-------------\\
// ------------------------------------------------------\\

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
