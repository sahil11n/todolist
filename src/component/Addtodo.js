import React, { useState } from 'react'

const Addtodo = (props) => {

    const [title, setTitle] = useState("")
    const [desc ,setDesc] = useState("")
    const submit = (e) =>{
        e.preventDefault()
        if(!title || !desc){
            alert("Title and Description cannot be empty")

        }
        else{
            props.addtodo(title,desc)
            setTitle("");
            setDesc("");
        }

    } 
    return (
        <div className='container my-4 '>
            <h2 className='text-center'>Add a todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label forhtml="title" className="form-label">Enter Title</label>
                    <input type="text" value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp" />
                   
                </div>
                <div className="mb-3">
                    <label forhtml="desc" className="form-label">Enter Description</label>
                    <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc" />
                </div>

                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            </form>
        </div>
    )
}

export default Addtodo
