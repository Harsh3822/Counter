import './App.css'
import {useState} from 'react'
function counter()
{
    const [value,setvalue] = useState(0);
    function incre()
    {
      setvalue(value+1);
    }
    function drecre()
    {
      setvalue(value-1);
    }
    return (
      <div className="App">
        <h1>Count : {value} </h1>
        <button style={{marginRight:"5px"}} onClick={incre}>increment</button>
        <button onClick={drecre}>Decrement</button>
      </div>
    );
}

export default counter;