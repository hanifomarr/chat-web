import React, { useContext } from 'react'
import './navbar.scss'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase';
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

    const { currentUser } = useContext(AuthContext)
    const { toggle } = useContext(DarkModeContext)

    return (
        <div className='navbar'>
            <div className="left">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <span>Deer</span>
                </Link>
                <div className="search">
                    <SearchRoundedIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="right">
                <HomeRoundedIcon onClick={toggle} />
                <NotificationsActiveRoundedIcon onClick={() => signOut(auth)} />
                < div className="user">
                    <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="profile" />
                    <span>{currentUser.email}</span>
                </div>
            </div>
        </div >
    )
}

export default Navbar