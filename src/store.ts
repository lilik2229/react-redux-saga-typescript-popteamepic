import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSageMiddleware from 'redux-saga';
import reducer from './reducers/reducers';
import root from './saga/saga';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSageMiddleware()

/* production環境でない場合にはRedux Dev Toolsを有効化する */
export const buildTodoStore = () => (
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
)

sagaMiddleware.run(root)

