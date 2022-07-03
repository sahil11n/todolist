import React from 'react'

export default function Todo({todo,onDelete}) {
    return (
<>
        <div className='my-3'>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
       
      
        </>  
      
    )
}
