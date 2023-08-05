import ReactDOM from 'react-dom/client';

import CounterComp from './CounterComp';
import { Provider } from 'react-redux';
import { counterStore } from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={counterStore}>
      <CounterComp />
    </Provider>
  </>
);
