import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSageMiddleware from 'redux-saga';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/reducers';
import root from './saga/saga';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSageMiddleware()

/* production環境でない場合にはRedux Dev Toolsを有効化する */
const store =
  process.env.NODE_ENV === 'production' ?
    createStore(
      reducer,
      applyMiddleware(sagaMiddleware),
    )
    :
    createStore(
      reducer,
      compose(
        applyMiddleware(sagaMiddleware),
        composeEnhancers()
      )
    )


sagaMiddleware.run(root)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
