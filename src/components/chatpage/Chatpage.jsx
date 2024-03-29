import React, { useContext } from 'react'
import './chatpage.scss'
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import DuoRoundedIcon from '@mui/icons-material/DuoRounded';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../../context/ChatContext';

function Chatpage() {
    const { data } = useContext(ChatContext);

    return (
        <div className="item">
            <div className='chatpage'>
                <div className="chatInfo">
                    <span>{data.user?.displayName}</span>
                    <div className="chatIcons">
                        <CallRoundedIcon />
                        <DuoRoundedIcon />
                        <MoreHorizIcon />
                    </div>
                </div>
                <Messages />
                <Input />
            </div>
        </div>
    )
}

export default Chatpage