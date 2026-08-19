import { useState } from "react";
import { sculptureList } from "./data";





function Gallery(){
    // let idx = 0;
    /*
    there we note that local doesn't change the value or name here. two reason behinde it.
    1.local variable doesn't persist between local variable when react renders this component a second time. it renders it from scratch it doesn't consider any change to the lical variables.
    2.changes to local variable won't trigger renders. React doesn't realize it needs to render the component again with the new data.

    Upadate a component with new data two things need to happen
    1.Retain the data between renders
    2.Trigger React to render the component with new data(re-rendering);

    the useState hook provide those two things
    1. A state variable to retain the data bwtween renders
    2. A state setter function to update the variable and trigger react to render the component.
    */
   const [Idx,setIdx] = useState(0);
    function handleClick(){
        setIdx(Idx+1);
    }
    let sculpture = sculptureList[Idx];
    return(
    <>
        
         <button onClick={handleClick}>
            Next
        </button>
        <h2>
            <i>{sculpture.name+" "}</i>
             by {" "+sculpture.artist}
        </h2>
        <h3>
            ({Idx+1} to {sculptureList.length});
        </h3>
    </>
    )
}
export default Gallery;