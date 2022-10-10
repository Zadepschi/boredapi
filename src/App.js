
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {

    const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    setAdvice(data);
  };


 useEffect(() => {
  fetchAdvice();
}, []);

  return ( 
    <div className="App">
   <h1> <span> Bored?</span></h1>
   <h2> <span>There is a lot of tips Inexpensive Hobbies here You Can Start Right now</span></h2>
      <h2><span> For example {advice.type} </span></h2>
   <h2 className='tip'><span> {advice.activity} </span></h2>

   <div className='btn'>
   <button onClick={fetchAdvice}>Get Advice</button>
   </div>
    </div>
    
  );
}

export default App;
