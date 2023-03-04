import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import "./login.scss"

const Login = () => {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")

        } catch (err) {
            setErr(true)
        }

    }


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
                {err && <span>Something Wrong</span>}
                <div className="right">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login