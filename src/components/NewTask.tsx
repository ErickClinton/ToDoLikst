import style from './NewTask.module.css'

export function NewTask(){

    function teste(){
        return console.log("Teste")
    }

    return(
        <div className={style.teste}>
            <input className={style.comment} placeholder="Adicionar novo todo" ></input>
            <button className={style.button} onClick={teste}>Adicionar</button>
        </div>
    )
}