import React,{useState} from 'react'

export default function Counter(props) {
    const [message,setCount]=useState('hello')
    function addingText(){
        setCount('you')
    }
    
  return (
    <div>
        <div>
            {message}
         </div>
        <button onClick={addingText}>add</button>
    </div>
    
  )
}
