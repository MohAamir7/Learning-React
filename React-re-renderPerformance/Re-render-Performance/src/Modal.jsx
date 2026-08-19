function Modal({setIsopen}) {
    return(
        <div>
            <h1>Open Modal</h1>
            <h3>This is the modal which can open</h3>
            <button onClick={()=>setIsopen(false)}>Close</button>
        </div>
        
    )
    
}

export default Modal;