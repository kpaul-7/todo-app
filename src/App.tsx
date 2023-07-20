import { useMediaQuery } from 'react-responsive'
import {useSelector} from 'react-redux'
import style from './App.module.css'
import Create from './components/Create/Create'
import Navbar from './components/Navbar/Navbar'
import TodoList from './components/TodoList/TodoList'
import bgMobileLight from './images/bg-mobile-light.jpg'
import bgDesktopLight from './images/bg-desktop-light.jpg'
import {RootState} from './store/store'
const App = () =>{
  const isMobile = useMediaQuery({
    query: '(max-width:600px)'
  })
  const theme = useSelector((state:RootState)=>state.theme.theme)
  return (
    <div className={`${style.App} ${theme === 'dark' ? style.Dark:""}`}>
      <div className={style.App__Background}>
        <img className={style.Background__Image} src={isMobile?bgMobileLight:bgDesktopLight} alt="background" />
      </div>
      <div className={`${style.ResponsiveWrapper} `}>
        <Navbar/>
        <Create/>
        <TodoList/>
      </div>
    </div>
  )
}
export default App