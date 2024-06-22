import React from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corporis iste beatae est possimus? Sed id eaque obcaecati autem quis molestias magnam, ex iusto in voluptas vero dicta tenetur voluptatum?</p>
          <span>Do  have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder='Username'/>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="text" placeholder='Name'/>
          <button>Login</button>
          </form>
      </div>
      </div>
    </div>
  )
}

export default Register
