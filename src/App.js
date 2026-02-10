import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }


useEffect(()=> {
  console.log("App component created");
}, [count]);

useEffect(()=> {
  console.log("Count is clicked");
}, [count]);


  return (
    <>
      {count} 
       <button onClick={increaseCount}>Increase count</button> 
    </>
  );
}

export default App;
