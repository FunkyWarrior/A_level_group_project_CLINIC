import React from 'react';
import ReactDOM from 'react-dom';
import App from './router'
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";
import './styles/index.scss'
import {store} from './store'
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
