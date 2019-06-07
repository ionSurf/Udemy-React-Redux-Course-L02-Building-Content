import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = { text = "Click me" };
    const buttonLabel = "Write something;
    
    return (
        <div>
            <label className="" htmlFor="name">
                { buttonLabel }
            </label>
            <input type="text" id="label" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                { buttonText.text }
            </button>
        </div>
    );
}

ReactDOM.render( <App />, document.querySelector( '#root' );
