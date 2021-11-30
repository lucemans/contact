import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

if (location.pathname == '/secret') {
    document.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}

render(<App />, document.getElementById('root'));