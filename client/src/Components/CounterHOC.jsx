import { useState } from "react"

function CounterHOC(Counter){
let  NewCounter=()=>{
    let[count,setcount]=useState(0)
    let updateCount=()=>{
    setcount(count+1)
    }
    return <Counter count={count} updateCount={updateCount}/>
}
return NewCounter
}

export default CounterHOC