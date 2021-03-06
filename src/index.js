import React from 'react';
// import { AppRegistry, Text, View } from 'react-native';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
