import React from 'react';

import Footer from './components/Footer'
import Header from './components/Header'

import styles from './App.module.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import {ITask} from './interfaces/Task'

function App() {
  return (
    <div>
    <Header/>
      <main className={styles.main}>
        <div className="">
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Create Task"/>
        </div>
        <div className="">
          <TaskList/>
        </div>
      </main>
    <Footer/>
    </div>
  );
}

export default App;
