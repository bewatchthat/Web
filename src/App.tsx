import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import styles from './App.module.scss';
import configureStore from './redux/configure-store';
import history from './utils/history';
import AddView from './views/AddView';
import HomeView from './views/HomeView';

const store = configureStore();

function App() {
  return (
    <main className={ styles.app }>
      <Provider store={ store }>
        <Router history={ history }>
          <Route path="/" exact component={ HomeView }/>
          <Route path="/add" component={ AddView }/>
        </Router>
      </Provider>
    </main>
  );
}

export default React.memo(App);
