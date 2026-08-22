function Form({ status = "empty" }) {
  if (status === "success") {
    return <h1>That's right Answer</h1>;
  }

  return (
    <>
      <h2>City Quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea placeholder="Enter your answer here...." disabled={status==='submitting'}></textarea>
        <button disabled={
            status === 'empty' || 'submitting'
        }>Submit</button>

        {status === 'error' && 
            <p className="Error">Good guess but wrong answer.Try again...</p>
        }
      </form>
    </>
  );
}

export default Form;
