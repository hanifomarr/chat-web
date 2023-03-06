import React from 'react'
import Search from './Search'
import Userchat from './Userchat'
import './chatlist.scss'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Chatlist = () => {
    return (
        <div className='item'>
            <div className="itemMenu">
                <span>Chat</span>
                <MoreHorizIcon />
            </div>
            <Search />
            <Userchat />
        </div>
    )
}

export default Chatlist