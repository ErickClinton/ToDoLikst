import styles from './ListToDo.module.css'
import { Trash } from 'phosphor-react'
export function ListToDo(){
    return(
        <div>
            <div className={styles.listStyle}>
                <button className={styles.CheckList}/>
                <p>preciso fazer isso </p> 
                        
            </div>
            <button className={styles.buttonTrash}><Trash /></button> 
        </div>
    )
}