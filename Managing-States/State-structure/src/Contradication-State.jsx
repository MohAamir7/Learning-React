import { useState } from "react"


function FeedBack(){
    const [text,setText] = useState('');
    // const [isSending,setIssending] = useState(false);
    // const [isSent,setIssent] = useState(false);
    const [status,setStatus] = useState('typing');
    /*
    there you see a contradiction situation if you forget to update the isSent and isSending together so both are become true together. and we end up with a situation where isSent and isSending both end up with true. that's complex and impossible situation.
    solution:it's better to replace isSending and isSent with with a status state which have three value 'typing(initial)',sending and sent.
    */

    async function handleSubmit(e){
        e.preventDefault();

        setStatus('sending')
        // setIssending('sending');
        await transfer(text);
        // setIssending(false);
        // setIssent('sent');
        setStatus('sent')

    }
    if(status === 'sent'){
           return <h1>Thank You. Feedback is sent</h1>
        }


    function handleTextChange(e){
        setText(e.target.value);
    }



    return (
        <form onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea
            // disabled ={isSending}
            disabled={status === 'sending'}
            value={text}
            onChange={handleTextChange}

            
            ></textarea>
            <button 
            // disabled={isSending}
            disabled = {status === 'sending'}
            type="submit"

            >Send</button>
            {status==='sending' && <p>Sending...</p>}

        </form>
    )
}

function transfer(text){
    return new Promise((res)=>{
        setTimeout(res,2000);

    })
}

export default FeedBack;