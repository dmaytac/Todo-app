import { Fragment } from "react"
import { useState } from "react"
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaSave } from "@react-icons/all-files/fa/FaSave";
import BackButton from "../BackButton";

const Business = ({isDarkMode,setBusiness}) =>{
  

    const [todos, setTodos]=useState([{id:0,name:'Learn angular'},{id:2,name:'Finish the mini project'},{id:4,name:'Add project to your protfolio'},{id:6,name:'Javascript Lesson 28'},{id:8,name:'Make a test case for country project'},{id:10,name:'Project Todo'}])
    const [todo, setTodo] = useState('')
    const [id, setId] = useState(12)
    const [todoEditItem,setTodoEditItem]= useState(null)
    const [todoSearch,setTodoSearch]= useState('')
    const [todoSearches,setTodoSearches]= useState([])
    const [todoDone,setTodoDone]= useState([])

    const [isTodoSearch, setIsTodoSearch] = useState(false)
  
    const handleSubmit=(e)=>{
      e.preventDefault()
        if(todo !== ''){
          setTodos([...todos,{id:id,name:todo}])
          setId(id+2)
          setTodo('')
          setIsTodoSearch(false)
        }
    }
  
    const onDelete = (id) =>{
      setTodos(todos=>todos.filter(todo=> todo.id !== id))
    }
    const onDeleteDoneTodos = (id) =>{
      setTodoDone(todoDone=>todoDone.filter(todo=> todo.id !== id))

    }
    
    const onEdit = (todo) =>{
      setTodoEditItem({...todo})
    }
  
    const onTodoEditNameChange =(e)=>{
      const newName = e.target.value
      setTodoEditItem({...todoEditItem, name:newName})
    }
    const onDoneEdit = () =>{
      setTodos(todos=>todos.map(todo=>{
        if(todo.id === todoEditItem?.id){
          return todoEditItem
        }
        return todo
      }))
      setTodoEditItem(null)
    }

    const onDone = (e) =>{
      console.log(todoDone.length)
      handleDoneTodos(e)
      onDelete(e.id)
    }

    const handleDoneTodos = (e) =>{
        setId(id+2)
        console.log(e.name,e.id)
        setTodoDone([...todoDone,{id:e.id,name:e.name}])
        setTodo('')
        setIsTodoSearch(false)
    }

    const onSearch = (value) =>{
      setTodoSearches([...todos])
      setIsTodoSearch(true)
      setTodoSearches(todoSearches=>todos.filter(todo=>todo.name.toLowerCase().includes(value.toLowerCase())))
      setTodoSearch('')
      if(value === ''){
        setIsTodoSearch(false)
      }
    }
    
    //<button onClick={()=>onSearch(todoSearch)} disabled={!todoSearch}>Search</button><br/>
    // /e=>setTodoSearch(e.target.value)
    //<h1>Todo App</h1>
    return(
      
      <div className='business'>
         {setBusiness(todos.length)}
        <BackButton/>
        <div className="input-search-wrapper">
          <input placeholder="Search Todo..." className={`input-search-${isDarkMode ? 'dark':'light'}`} type='text' value={todoSearch} onChange={e=>setTodoSearch(e.target.value)} onInput={(e)=>onSearch(e.target.value)}/><i style={{position:'absolute'}}></i>
        </div>
        <div className={`input-add-wrapper-${isDarkMode ? 'dark':'light'}`}>
          <form className="form" onSubmit={handleSubmit}>
            <input className={`input-add-${isDarkMode ? 'dark':'light'}`} type='text' placeholder='New Todo' value={todo} onChange={e=>setTodo(e.target.value)}/>
            <button className={`button-add-${isDarkMode ? 'dark':'light'}`} type='submit' disabled={!todo}>Add Todo</button>
          </form>
        </div>
        <ul>
          {todos.length>0 ? <h2 className="info-title">Today</h2>: <h2 className="info-title">Υou have nothing for today</h2>}
          
          {!isTodoSearch && todos.map((todo,index)=>{
            const isEditing = todoEditItem?.id === todo.id
            return(<div className={`todo-list-${isDarkMode ? 'dark':'light'}`} key={todo.id}>
              {!isEditing && <Fragment><h3 className={`todo-item-${isDarkMode ? 'dark':'light'}`}>{todo.name}</h3> </Fragment>}

              <div className={`btn-all-wrapper-${isDarkMode ? 'dark':'light'}`}>
                <input onChange={(e)=>onDone(todo)} className="checkmark" type='checkbox'/>
              </div>
              {isEditing && 
              <input className={`todo-item-input-${isDarkMode ? 'dark':'light'}`} value={todoEditItem.name} onChange={onTodoEditNameChange}/>}
              {!isEditing && 
              <div className={`btn-all-wrapper-${isDarkMode ? 'dark':'light'}`}><button className={`btn-all-${isDarkMode ? 'dark':'light'}`} onClick={()=>onEdit(todo)}><FaEdit color='rgb(52,134,246)'/></button></div>
              }
              {isEditing && 
              <div className={`btn-all-wrapper-${isDarkMode ? 'dark':'light'}`}><button className={`btn-all-${isDarkMode ? 'dark':'light'}`} onClick={()=>onDoneEdit()}><FaSave color='rgb(52,134,246)'/></button></div>
              }
              <div className={`btn-all-wrapper-${isDarkMode ? 'dark':'light'}`}>

              <button className={`btn-all-${isDarkMode ? 'dark':'light'}`} onClick={()=>onDelete(todo.id)}><FaTrashAlt className="Fa" color='rgb(235,84,69)'/></button>
              </div>
              </div>)
            })}
          {isTodoSearch && todoSearches.map((todo,index)=>{
            const isEditing = todoEditItem?.id === todo.id
            return(<div className={`todo-list-${isDarkMode ? 'dark':'light'}`} key={todo.id}>
              {!isEditing && <Fragment><h3 className={`todo-item-${isDarkMode ? 'dark':'light'}`}>{todo.name}</h3> </Fragment>}
              <div className={`btn-all-wrapper-${isDarkMode ? 'dark':'light'}`}>
                <input onChange={(e)=>onDone(todo)} className="checkmark" type='checkbox'/>
              </div>
              {isEditing && 
              <input className={`todo-item-input-${isDarkMode ? 'dark':'light'}`} value={todoEditItem.name} onChange={onTodoEditNameChange}/>}
              
              {!isEditing && 
              <div className={`btn-all-wrapper-${isDarkMode ? 'dark':'light'}`}><button className={`btn-all-${isDarkMode ? 'dark':'light'}`} onClick={()=>onEdit(todo)}><FaEdit color='rgb(52,134,246)'/></button></div>
              }
              {isEditing && 
              <div cclassName={`btn-all-wrapper-${isDarkMode ? 'dark':'light'}`}><button className={`btn-all-${isDarkMode ? 'dark':'light'}`} onClick={()=>onDoneEdit()}><FaSave color='rgb(52,134,246)'/></button></div>
              }
  
            <div className={`btn-all-wrapper-${isDarkMode ? 'dark':'light'}`}><button className={`btn-all-${isDarkMode ? 'dark':'light'}`} onClick={()=>onDelete(todo.id)}><FaTrashAlt color='rgb(235,84,69)'/></button></div>
  
  
              </div>)
            })}
            {!isTodoSearch &&<>
            {todoDone.length > 0 && 
            (<><h2>Done</h2>
            {todoDone.map((todo,index)=>{
              return(<div className={`todo-list-${isDarkMode ? 'dark':'light'}`} key={todo.id}>
              <h3 className={`todo-item-${isDarkMode ? 'dark':'light'}`}><s>{todo.name}</s></h3>
              <div className={`btn-all-wrapper-${isDarkMode ? 'dark':'light'}`}><button className={`btn-all-${isDarkMode ? 'dark':'light'}`} onClick={()=>onDeleteDoneTodos(todo.id)}><FaTrashAlt color='rgb(235,84,69)'/></button></div>
              </div>
              )
            })}
            
            
            </>)
            }

            </>}
            </ul>
            </div>
            )
          }

          export default Business