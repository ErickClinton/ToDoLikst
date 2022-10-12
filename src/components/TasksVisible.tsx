import { ListToDo } from './ListToDo'
import styles from './TasksVisible.module.css'
export function TaskVisible(){
    return(
        <div className={styles.teste}> 
            <div className={styles.container}>
                <span className={styles.tasksAreConclusion}>tarefas concluidas 0</span>
                <span className={styles.conclusion}>Concluído 0</span>
            </div>
            <div className={styles.tasksVisible}>
                <div className={styles.ListStyles}>
                    <ListToDo />
                </div>
                
            </div>
        </div>
        
    )
}
/*Erick do futuro, criar um componente para esta lista, para conseguirmos dar o maregin top.
no css basta dar .Varialvel + .Variavel{margin-top:2px}

*/