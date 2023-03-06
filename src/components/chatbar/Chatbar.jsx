import React from 'react'
import './chatbar.scss'
import Chatlist from '../../components/chatlist/Chatlist'
import Chatpage from '../../components/chatpage/Chatpage'

const chatbar = () => {
    return (
        <div className="chatbar">
            <div className="container">
                <Chatlist />
                <Chatpage />
            </div>
        </div>
    )
}

export default chatbar