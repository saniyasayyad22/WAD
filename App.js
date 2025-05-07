npx create-react-app hello-app
cd hello-app
npm start




import React,{useState} from 'react'
function Counter(){
  let[count,setCount]=useState(0);
  function incCount(){
    setCount(count+1);
  }
  return(
     <div>
        <h2>Count:{count}</h2>
        <button onClick={incCount}>Increase Count</button>
     </div>
  )
}
export default Counter;
