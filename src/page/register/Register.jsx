import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "./register.scss"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import AddIcon from '@mui/icons-material/Add';

const Register = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "deer_users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    };

    return (

        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <input required type="text" placeholder="display name" />
                        <input required type="email" placeholder="email" />
                        <input required type="password" placeholder="password" />
                        <input required style={{ display: "none" }} type="file" id="file" />
                        <label htmlFor="file">
                            <AddIcon />
                            <span>Add an avatar</span>
                        </label>
                        <button disabled={loading}>Sign up</button>
                        {loading && "Uploading and compressing the image please wait..."}
                        {err && <span>Something went wrong</span>}
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