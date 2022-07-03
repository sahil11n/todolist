
import { useEffect, useState } from 'react';
import './App.css';
import Addtodo from './component/Addtodo';
import Navbar from './component/Navbar';
import Todolist from './component/Todolist';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));

  }
 
  const onDelete = (todo)=>{
    console.log("todo has been deleted",todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
    
  }
  const addtodo = (title,desc) =>{
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodos={
       sno:sno,
       title:title,
       desc:desc,
    }
    setTodos([...todos , mytodos])
   console.log("new addded todos are",mytodos)

   
  }
  const [todos ,setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])


  return (
    <>
      <Navbar></Navbar>
      <Addtodo addtodo={addtodo}/>
      <Todolist todos={todos} onDelete={onDelete}></Todolist>
    </>
  );
}

export default App;
