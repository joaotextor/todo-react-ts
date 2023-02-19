import React from 'react';

import Footer from './components/Footer'
import Header from './components/Header'

import styles from './App.module.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal'

import {ITask} from './interfaces/Task'

function App() {

  const [taskList, setTaskList] = React.useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = React.useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const modalHideShow = (display: boolean) => {
    const modal = document.querySelector('#modal')
    if(display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask):void => {
    modalHideShow(true)
    setTaskToUpdate(task)
  }

  const updateTask = ({id, title, difficulty}: ITask) => {

    const updatedTask: ITask = {id, title, difficulty}

    const updatedItems = taskList.map(task => {
      return task.id === updatedTask.id
        ? updatedTask
        : task
    })

    setTaskList(updatedItems)

    modalHideShow(false)
  }

  return (
    <div>
    <Modal children={
      <TaskForm
        btnText="Edit Task"
        taskList={taskList}
        task={taskToUpdate}
        setTaskList={setTaskList}
        handleUpdate={updateTask}
      />
    }/>
    <Header/>
      <main className={styles.main}>
        <div className="">
          <h2>What do you plan to do?</h2>
          <TaskForm btnText="Create Task" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div className="">
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
        </div>
      </main>
    <Footer/>
    </div>
  );
}

export default App;
