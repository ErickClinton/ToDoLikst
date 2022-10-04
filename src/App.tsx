import React from 'react'
import './global.css'
import {Header} from './components/Header'

import styles from './App.module.css'
export function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <p>Tarefas criadas</p>
        <p>Concluídas</p>
      </div>

       

    </div>
    
    
  )
}


