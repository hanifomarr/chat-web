import React from 'react'
import { Link } from 'react-router-dom'
import "./login.scss"

const Login = () => {
    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Connect Now!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quidem officiis? Ab dignissimos consequatur nisi?</p>
                    <span>Dont have an account?</span>
                    <Link to={"/Register"}>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login