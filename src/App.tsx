import React from 'react'
import './global.css'
import {Header} from './components/Header'

import styles from './App.module.css'
import { NewTask } from './components/NewTask'

import { TaskVisible } from './components/TasksVisible'
export function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        
        <TaskVisible />
      </div>

       

    </div>
    
    
  )
}


