import React from 'react';
import styles from './App.module.css';
import HomeView from './components/views/HomeView';

function App() {
  return (
    <main className={ styles.app }>
      <HomeView/>
    </main>
  );
}

export default React.memo(App);
