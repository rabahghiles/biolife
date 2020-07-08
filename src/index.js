import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
    		<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
