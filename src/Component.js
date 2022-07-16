import React,{useState} from 'react'
import ChildComponent from './ChildComponent';

export default function Component() {
    const [parentName,setParent] = useState('Parent');
    function greetParent(child){
        console.log(child);
    }
  return (
    <div>
      <ChildComponent greetHandler={()=>greetParent('child')}/>
    </div>
  )
}
