import React from 'react'
import { Link } from 'react-router-dom'
import "./register.scss"

const Register = () => {
    return (
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Confirm Password' />
                        <button>Register</button>
                    </form>
                </div>
                <div className="right">
                    <h1>Register Now!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quidem officiis? Ab dignissimos consequatur nisi?</p>
                    <span>Dont have an account?</span>
                    <Link to={"/login"}>
                        <button>Login</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Register