import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './App.module.css';
import configureStore from './redux/configure-store';
import AddView from './views/AddView';
import HomeView from './views/HomeView';

const store = configureStore();

function App() {
  return (
    <main className={ styles.app }>
      <Provider store={ store }>
        <BrowserRouter>
          <Route path="/" exact component={ HomeView }/>
          <Route path="/add" component={ AddView }/>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default React.memo(App);
