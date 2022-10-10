import { FormEvent, useState ,ChangeEvent, InvalidEvent} from 'react'
import style from './NewTask.module.css'

export function NewTask(){

    const[task,setTask]=useState([''])

    const[newTask,setNewTask]=useState('')

    function createTask(event:FormEvent){
        event.preventDefault()

        setTask([...task,newTask])
        console.log(task)
        setNewTask('')
    }



    function newTaskChange(event:ChangeEvent<HTMLInputElement>){
        
        setNewTask(event.target.value)
    }

    return(
        <div className={style.teste}>
            <form onSubmit={createTask}>
                <input 
                    value={newTask}
                    className={style.comment} 
                    placeholder="Adicionar novo todo" 
                    required 
                    onChange={newTaskChange} 
                    name="task"
                >
                </input>
                <button className={style.button}  type="submit">Adicionar</button>
            </form>
            <div>
                {
                    task.map(task=>{
                        return(
                            <p>{task}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}