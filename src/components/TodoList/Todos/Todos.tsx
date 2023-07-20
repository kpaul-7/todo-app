import style from './Todos.module.css';
import checkIcon from '../../../images/icon-check.svg'
import crossIcon from '../../../images/icon-cross.svg'
import { todo } from '../../../types/types';
import {useDispatch} from 'react-redux'
import { changeActiveStatus, deleteTodo } from '../../../store/slices/todos';

type todosTypes = {
    todos: todo[] | []
}

const Todos = (props: todosTypes) =>{
    const dispatch = useDispatch()
    return (
        <div className={style.Todos}>
            {   props.todos.length === 0 ? <p className={style.BlankData}>No todos present</p> : 
                props.todos.map((elm)=>{
                    return (
                        <div className={style.TodoItem}>
                            <div onClick={()=>dispatch(changeActiveStatus(elm.id))} className={`${style.Todo__Icons} ${style.Todo__Check} ${elm.isCompleted ? style.Todo__Checked : ""}`}>
                                <img src={checkIcon} alt="" />
                            </div>
                            <p className={style.Content}>{elm.isCompleted ? <s>{elm.content}</s> : elm.content}</p>
                            {!elm.isCompleted &&                       
                                <div onClick={()=>dispatch(deleteTodo(elm.id))} className={`${style.Todo__Icons} ${style.Todo__Cross}`}>
                                    <img src={crossIcon} alt="" />
                                </div>
                            }
                       </div>
                    )
                })
            }
        </div>
    )
}

export default Todos