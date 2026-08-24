import { useState } from "react"


function Panel({title,children,isActive,onShow}){

    return(
        <section className="Panel">
            <h3>{title}</h3>
            {isActive  ? (
                <p>{children}</p>
            ):
            <button onClick={onShow}>Show</button>
            
            }

        </section>
    )
}

export default Panel;