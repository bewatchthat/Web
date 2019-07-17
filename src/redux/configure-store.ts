import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import resourceReducer from './reducers/resource.reducer';

export default function configureStore(): Store {
  return createStore(
    resourceReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
}
