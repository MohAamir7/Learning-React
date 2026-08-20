import { useState } from "react"

/*
if want to change the one field of the object and other value unchange so need to a make a copy of Object. so we use spread opreartor to do this work.
*/
function Form2(){
    const[person,setperson] = useState({
        firstName:"Moh",
        lastName :"Aamir",
        email:"mohaamir07@gmail.com"
    })
// Input field don't change the value here because we trying to mutate it so we use spread opreator to change the value first we make the copy of existing object using spread...
    function handleFirstName(e){
        setperson({
            ...person, // copy the old object values 
            firstName : e.target.value //But override this one. do same for others
        })
        

    }
    function handlelastName(e){
        setperson({
            ...person,
            lastName:e.target.value

        })
    }
    function handleEmail(e){
        setperson({
            ...person,
            email:e.target.value
        })
    }
    // if we want to change in one handleOnchange to change the all these value we code like this.
    function handleChange(e){
        // give the name peroperty all the input values;
        setperson({
            ...person,
            [e.target.name]:e.target.value
        })
    }

    return(
        <>
        <label>
            FirstName:
            <input type="text" 
            value={person.firstName}
            onChange={handleFirstName} 
            />
        </label>
        <label >
            LastName:
            <input type="text"
            value={person.lastName}
            onChange={handlelastName}
            />
        </label>
        <label>
            E-mail:
            <input type="text"
            value={person.email}
            onChange={handleEmail}   
            />
        </label>
        <p>
            {person.firstName}{' '}
            {person.lastName}{' '}
            {person.email}
        </p>
        </>

    )
}

export default Form2;