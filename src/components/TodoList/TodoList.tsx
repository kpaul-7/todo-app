import style from './TodoList.module.css'
import Todos from './Todos/Todos'
import TodosNavbar from './Todos/TodosNavbar/TodosNavbar'
import {useSelector} from 'react-redux'
import {RootState} from '../../store/store'
const TodoList = () =>{
    const theme = useSelector((state:RootState)=>state.theme.theme)
    const savedTodos = useSelector((state: RootState )=> state.todos.todos)
    const currentPage = useSelector((state:RootState) => state.page.page)
    let filteredTodos = savedTodos;
    if(currentPage === 'active'){
        filteredTodos = savedTodos.filter(todo=>!todo.isCompleted);
    }else if(currentPage === 'completed'){
        filteredTodos = savedTodos.filter(todo=>todo.isCompleted)
    }else{
        filteredTodos = savedTodos
    }
   let itemLeft = 0
   savedTodos.forEach(todo => {
    if(!todo.isCompleted){
        itemLeft += 1
    }
   })
    return (
        <div className={`${style.TodoList} ${theme === 'dark' ? style.Dark : ""}`}>
            <Todos todos={filteredTodos}/>
            <TodosNavbar itemLeft={itemLeft}/>
        </div>
    )
}
export default TodoList