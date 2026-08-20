import { useState } from "react";


function Counter(){
    const[number,setnumber] = useState(0);

    return(
        <>
        <h1>{number}</h1>
        <button onClick={()=>{
            setnumber(number+5);
            setTimeout(()=>{
                alert(number);
            },3000);
        }}>
            +5
        </button>
        </>
    )
}

export default Counter;