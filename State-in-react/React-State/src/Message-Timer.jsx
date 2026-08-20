import { useState } from "react"


function Form(){
    const [msg,setmsg] = useState('Hello');
    const [To,setTo] = useState('Alice');

    function submitForm(e){
        e.preventDefault();
        setTimeout(()=>{
            alert(`Your ${msg} is sent to ${To}`);

        },3000);

    }

    return(
        <form onSubmit={submitForm}>
            <label>
                To:{' '}
                <select
                    value={To}
                    onChange={e=>set(e.target.value)}>
                    <option value="Bob">Bob</option>
                    <option value="Alice">Alice</option>
                </select>
            </label>

            <textarea 
                placeholder="type here your message"
                value={msg}
                onChange={e=>setmsg(e.target.value)}
            />
            <button type="submit" >Send</button>
        </form>
    )
}

export default Form;