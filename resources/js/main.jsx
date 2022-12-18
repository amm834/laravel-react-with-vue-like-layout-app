import React from 'react';
import {createRoot} from "react-dom";

const App = () => <h1>Hello world</h1>;

createRoot(document.getElementById('app'))
    .render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
