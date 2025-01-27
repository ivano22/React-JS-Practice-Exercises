import { useState } from 'react'

function CounterApp() {
    const [count, setCount] = useState(0);
    const increment = () => {
        //Gets the state of previous state + current
        setCount(prev => prev + 1);
    }
    const decrement = () => {
        //Math.max prevents the counter from going below 0
        setCount(prev => Math.max(0, prev - 1));
     
    }
     

    return (
        <card className=" ">
            <h3>{count }</h3>
        <button  className="btn1 " onClick={increment}>Increment
           
        </button>
         <button  className=" btn2 " onClick={ decrement}> Decrement
           
        </button>
       
       
        </card>
    )

}


export default CounterApp;