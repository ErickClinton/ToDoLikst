import styles from './TasksVisible.module.css'
export function TaskVisible(){
    return(
        <div className={styles.teste}> 
            <div className={styles.container}>
                <span className={styles.tasksAreConclusion}>tarefas concluidas 0</span>
                <span className={styles.conclusion}>Concluído 0</span>
            </div>
            <div className={styles.tasksVisible}>
                <li className={styles.ListStyles}>
                    <button>kkk</button>
                    <p>Fazer algo hj</p>
                    <button>kkk</button>
                    <p>Fazer algo hj</p>
                    <button>kkk</button>
                    <p>Fazer algo hj</p>
                    <button>kkk</button>
                    <p>Fazer algo hj</p>
                    <button>kkk</button>
                </li>
                
            </div>
        </div>
        
    )
}