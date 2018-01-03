import React from 'react';
import {applyMiddleware, createStore, compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import People from './components/People';
import reducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk, logger)
  ));

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <People />
      </Provider>
    )
  }
}

export default App