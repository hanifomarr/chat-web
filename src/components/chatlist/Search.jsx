import React, { useState, useContext } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import { AuthContext } from "../../context/AuthContext";


const Search = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const { currentUser } = useContext(AuthContext)

    const handleSearch = async () => {
        const q = query(collection(db, "deer_users"), where("displayName", "==", username));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch (err) {
            setErr(true)
        }
    }

    const handleKey = e => {
        e.code === 'Enter' && handleSearch()
    }

    const handleSelect = async () => {
        const combinedId =
            currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid;
        try {
            const res = await getDocs(db, "chats", combinedId)


        } catch (err) {

        }
    }

    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder='Search' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} />
            </div>
            {err && <div><span>User not found</span></div>}
            {user && <div className="userChat" onClick={handleSelect}>
                <div className="userChatInfo">
                    <img src={user.profileURL} alt="" />
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search