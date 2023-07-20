import check from '../../images/icon-check.svg'
import cross from '../../images/icon-cross.svg'
import { saveTodos } from '../../store/slices/todos'
import style from './Create.module.css'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {RootState} from '../../store/store'
import { stat } from 'fs'
const Create = () =>{
    const dispatch = useDispatch()
    const theme = useSelector((state:RootState)=>state.theme.theme)
    const [content,setContent] = useState<string>("")
    const [error,setError] = useState<boolean>(false)
    const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>,inputedText: string) =>{
        e.preventDefault()
        inputedText = inputedText.trim()
        console.log(inputedText);
        setError(false)
        if(inputedText.length === 0){
            setError(true)
        }else{
            dispatch(saveTodos({id:Date.now()+"",isCompleted:false,content:content}))
            setContent("")
        }
    }
    return (
        <div className={style.Create}>
            <form className={style.Create__Form} onSubmit={((e)=>onSubmitHandler(e,content))}>
                <div className={`${style.Create__Icons} ${style.First__Icon}`}>
                    <img src={check} alt="check icon" />
                </div>
                <input className={`${error ? style.Error : ""} ${theme === 'dark'? style.Dark :""}`} type="text" placeholder='Create a new todo...' value={content} onChange={e=>setContent(e.target.value)}/>
                <div className={`${style.Create__Icons} ${style.Second__Icon}`}>
                    <img src={cross} alt="cross icon" />
                </div>
            </form>
        </div>
    )
}

export default Create