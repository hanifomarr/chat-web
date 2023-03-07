import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import "./register.scss"

const Register = () => {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            await setDoc(doc(db, "deer_users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});

            navigate("/")

        } catch (err) {
            setErr(true)
        }

    }
    return (

        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Confirm Password' />
                        <button>Register</button>
                    </form>
                    {err && <span>Something Wrong</span>}
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