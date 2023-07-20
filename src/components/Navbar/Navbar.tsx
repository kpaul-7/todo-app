import { changeTheme } from '../../store/slices/theme'
import style from './Navbar.module.css'
import {useDispatch,useSelector} from 'react-redux'
import {RootState} from '../../store/store'
const Navbar = () =>{
    const dispatch = useDispatch()
    const theme = useSelector((state:RootState)=>state.theme.theme)
    return (
        <div className={style.Navbar}>
            <p>T O D O</p>
            <i onClick={()=>{dispatch(changeTheme())}} className={`${theme === 'dark' ? "fa-regular fa-sun" : "fa-regular fa-moon"}`}></i>
        </div>
    )
}

export default Navbar