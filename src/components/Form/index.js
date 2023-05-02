import React,{useState} from 'react'
import axios from 'axios'
import './index.css'

const Form = () => {
  const [userDetails, setUserDetails] = useState({userName:"", userEmail:"",userPassword:'',userConfirmPassword:'',message:""})
  const formValues = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value})
  }
  const register = async (e) => {
    e.preventDefault()
    try{
        const body =  JSON.stringify({userName:userDetails.userName, userEmail:userDetails.userEmail, userPassword:userDetails.userPassword, userConfirmPassword:userDetails.userConfirmPassword});
        const res = await axios.post('http://localhost:5000/register', body, {
          headers:{
            "Content-Type": "application/json"
          }
        })
        setUserDetails({userName:"", userEmail:"",userPassword:'',userConfirmPassword:'', message:res.data.message})
    }catch(err){
        console.log(err)
    }
    
  }
  return (
    <div className='container'>
      <h1 className='title'>Register User</h1>
      <form onSubmit={register}>
        <label>Name:</label>
        <input type="text" placeholder='Name' value={userDetails.userName} required id="userName" name="userName" onChange={formValues} /><br/>
        <label>Email:</label>
        <input type="email" placeholder='Email' value={userDetails.userEmail} required id="userEmail" name="userEmail" onChange={formValues} /><br/>
        <label>Password:</label>
        <input type="password" placeholder='Password' value={userDetails.userPassword} required id="userPassword" name="userPassword" onChange={formValues} /><br/>
        <label>Confirm Password:</label>
        <input type="password" placeholder='Confirm Your Password' value={userDetails.userConfirmPassword} required id="userConfirmPassword" name="userConfirmPassword" onChange={formValues} /><br/>
        <button type='submit'>Register</button>
        {userDetails.message && <p className='msg'>*{userDetails.message}</p>}
      </form>
    </div>
  )
}

export default Form
