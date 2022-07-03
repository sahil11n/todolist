import React from 'react'
import Todo from './Todo'

export default function Todolist(props) {
  return (
    
    <div className="container ">
    <h2 className='my-2 text-center'>List of Todos</h2>
    {props.todos.length===0?"List is Empty":
      props.todos.map((todo)=>{
       return( 
        <>
       <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
       <hr />
       </>
       )
      })
      
  }
    
      </div>
  
  )
}
