import styles from './Header.module.css'
import rocket from '../assets/rocket.svg'
import todo from '../assets/todo.svg'
export function Header(){
    return(
        <header className={styles.header}>
            <img src={rocket} alt="Rocket"/>
            <img src={todo} alt="Rocket"/>
        </header>
    )
}