import { useState } from "react";

function Form() {
  const [answer,SetAnswer] = useState('');
  const [isError,setIsError] = useState(null);
  const [status,setStatus] = useState('typing');
  if (status === "success") {
    return <h1>That's right Answer</h1>;
  }

  async function handleSubmit(e){
    e.preventDefault();
    setStatus('submitting');
    try{
       await submitForm(answer);
       setStatus('success');
    }catch(err){
      setStatus('typing');
      setIsError(err);

    }

  }

  function handleTextareaChange(e){
    SetAnswer(e.target.value);
  }

  return (
    <>
      <h2>City Quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer}
        onChange={handleTextareaChange}
        placeholder="Enter your answer here...." disabled={status==='submitting'}></textarea>
        <button disabled={
           answer.length === 0 || status==='submitting'
        }>Submit</button>

        {isError !== null && 
            <p className="Error">{isError.message}</p>
        }
      </form>
    </>
  );
}

async function submitForm(answer) {
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      let shoulderr = answer.toLowerCase() !== 'lima'
      if(shoulderr){
        rej(new Error('Good guess But wrong answer. Try again..'));
      }else{
        res();
      }
    },3000);
  })
  
}

export default Form;
