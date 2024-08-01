import { useState , useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // On every render/refrech
  useEffect (()=> {
  alert("On every render/refrech")  

  });
 // On first render/refrech
  useEffect (()=> {
  alert("On first render/refrech")  

  },[]);
  // render when count change
  useEffect (()=> {
  alert("count was change")  

  },[count]);
  return (
    <>
   <h1>the couunt was change{count}</h1>
   <button onClick={()=>{setCount(count+1)}}>click me</button>
    </>
  )
}

export default App
