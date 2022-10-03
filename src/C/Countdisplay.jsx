import React, {useContext} from 'react'
import CounterContext from './CounterContext'

function Countdisplay() {
    const {count1, setCount1, count2, setCount2} = useContext(CounterContext)
  return (
    <div> 
        <h1> Count is : {count1} </h1> 
        <button onClick={() => setCount1((count) => count+1)} >Increment</button>
        <button onClick={() => setCount1((count) => count-1)} >Decrement</button>
    </div>
  )
}

export default Countdisplay