import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(): Store {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
