import React from 'react'
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Todo=()=> {   
  const [tasks,setTasks]=useState([]);//tasks 
  const [val,setVal]=useState("");//inputvalue
  
    const add=()=>{
      if(val.trim() ==="" || tasks.includes(val)){ //the new task is already in the tasks array
          alert("Please enter your task");
      } else {
          setTasks([...tasks,val]);
        // tasks.push(val);
          setVal("");
      }
   };

    const del=(index)=>{
      if (window.confirm("Are you sure you want to delete")){
      setTasks(tasks.filter((_,i)=>i!==index));}
    }

    const update=(index,newValue)=>{
      const updatedTask=[...tasks];
      updatedTask[index]=newValue;
      setTasks(updatedTask);
    };
    
  const change=event=>
{
  setVal(event.target.value)
}
  return (
    <div className='container'>
      <h3>TO-DO LIST</h3>
   <input onChange={change} value={val} placeholder='Enter your task' className='inpt'/>
   <button onClick={add} className="btn">Add</button>
<ul>
   
        {tasks.map((task,index)=>(
          <li key={index}>{task} 

          <button onClick={()=>del(index)}><MdDelete/></button>
          <button onClick={()=>{
            const newTask=prompt('Edit task', task);
            if(newTask !==null && newTask.trim() !== ''){
              update(index,newTask);
            }
          }}><MdEdit/></button>
                
                </li>
            ))}
  
</ul>
    </div>


  )
}

export default Todo
