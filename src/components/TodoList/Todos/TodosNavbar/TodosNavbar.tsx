import { changePage } from '../../../../store/slices/currentpage'
import { clearComplete } from '../../../../store/slices/todos'
import style from './TodosNavbar.module.css'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {RootState} from '../../../../store/store'
type todosNavbarType = {
    itemLeft: number
}
const TodosNavbar = (props: todosNavbarType) =>{
    const dispatch = useDispatch()
    const activePage = useSelector((state:RootState)=>state.page.page)
    return (
        <div className={style.TodosNavbar}>
            <div>
                <p>{props.itemLeft} items left</p>
            </div>
            <div className={style.Action}>
                <button className={`${activePage === 'all' ? style.Active: ""}`} onClick={()=>dispatch(changePage("all"))}>All</button>
                <button className={`${activePage === 'active' ? style.Active: ""}`} onClick={()=>dispatch(changePage("active"))}>Active</button>
                <button className={`${activePage === 'completed' ? style.Active: ""}`} onClick={()=>dispatch(changePage("completed"))}>Completed</button>
            </div>
            <div className={style.Action}>
                <button onClick={()=>dispatch(clearComplete())}>Clear Completed</button>
            </div>
        </div>
    )
}

export default TodosNavbar;