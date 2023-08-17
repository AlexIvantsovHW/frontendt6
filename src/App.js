import axios from 'axios'
import './App.css';
import { React, useEffect, useState } from 'react';


function App() {
  const [message,setMessage]=useState(null)
  useEffect(()=>{fetchData();},[])
  debugger;
  const fetchData= async ()=>{
    try{
      debugger;
      /* const result=await axios("https://t6-cuzc.onrender.com/user") */
      const result=await axios("http://localhost:3001/users")
      debugger;
      setMessage(result);
      console.log(result);
    }catch(err){console.log('Error')}
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          !message?"Loading":(message.data[0].name)
        }
      </header>
    </div>
  );
}

export default App;
