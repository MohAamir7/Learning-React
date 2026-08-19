import { useState } from "react";
import Modal from "./Modal";

function ButtonWithModal() {

      const [Isopen, setIsopen] = useState(false);

    return(
        <>
            <button onClick={()=>setIsopen(true)}>Open Modal</button>
            {Isopen && <Modal setIsopen={setIsopen}/>}
        </>

    )
    
}
export default ButtonWithModal;