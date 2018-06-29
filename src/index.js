import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/tachyons.css';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { styles } from "./components/styles";
import { cssProperties } from "./components/css_properties";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
