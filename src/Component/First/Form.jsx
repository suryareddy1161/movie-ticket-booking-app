import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../lostyle.css"


const Form = () => {
  const navigate = useNavigate();
  const clickHandler = () =>{
    navigate("/product")
  }
  return (
    <div className="logincontainer" ><br className='name' ></br>name:-
        <input type="text" name="userName" id="" className='p-2 m-3'  placeholder='userName'/> <br/>passWord :-
        <input type="password" name="passWord" id="" className='p-2 m-3' placeholder='password'/> <br/>
        <button className='btn btn-primary' onClick={clickHandler}>submit</button>
    </div>
  )
}

export default Form