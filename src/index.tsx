import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { buildTodoStore } from './store';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={buildTodoStore()}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
