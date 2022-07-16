import React,{useState} from 'react'

function Forms() {
    const [userName,setUserName]=useState('')
    const[comments,setComments]=useState('')
    const[topic,setTopic]=useState('')
    const handleUserName=(event)=>{
        setUserName(event.target.value)
        // console.log(event.target.value);
    }
    const handleComments=(event)=>{
        setComments(event.target.value)
        console.log(event.target.value);
    }
    const handleTopic=(event)=>{ 
        setTopic(event.target.value)
        console.log(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        
        alert(topic);
    }
  return (
   <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="">UserName</label>
        <input type="text" value={userName} onChange={handleUserName} />

    </div>
    <div>
        <label htmlFor="">comments</label>
        <textarea cols="30" rows="5" value={comments} onChange={handleComments} />
    </div>
    <div>
        <label htmlFor="">Topic</label>
        <select value={topic} onChange={handleTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select>
    </div>
    <button type='submit' >Submit Form</button>
   </form>
  )
}

export default Forms