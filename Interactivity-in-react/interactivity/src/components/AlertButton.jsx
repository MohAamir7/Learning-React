import Button from "./Button";

function AlertMsg({msg,text}){
    return(
         <Button onClick={()=>{alert(msg)}}>
            {text}

       </Button>

    )
   
}

export default AlertMsg;