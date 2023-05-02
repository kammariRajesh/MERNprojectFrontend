import React from 'react'
import mern from '../../mern.png';
import './index.css'
const Home = () => {
  return (
    <div className='container'>
      <h1 className='title'>FULSTACK PROJECT</h1>
      <p>This is a MERN stack project. In this project I have created the Register, Login and profile pages.
         I have authenticated the user using jsonwebtoken and stored user details in mongoDB</p>
      <img className='img' src={mern} alt="NotFound" />
    </div>
  )
}

export default Home
