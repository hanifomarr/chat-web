import React from 'react'
import './navbar.scss'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                <HomeRoundedIcon />
                <NotificationsActiveRoundedIcon />
                <div className="user">
                    <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="profile" />
                    <span>Seman Ali</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar