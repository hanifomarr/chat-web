import React from 'react'
import './chatbar.scss'

const chatbar = () => {
    return (
        <div className="chatbar">
            <div className="container">
                <div className="item">
                    <span>Suggested Friendlist</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="" />
                            <span>Name</span>
                        </div>
                        <div className="buttons">
                            <button>Accept</button>
                            <button>Reject</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="" />
                            <span>Name</span>
                        </div>
                        <div className="buttons">
                            <button>Accept</button>
                            <button>Reject</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="" />
                            <span>Name</span>
                            <p>Do something notifications</p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="" />
                            <div className="online"></div>
                            <span>Name</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="" />
                            <div className="online"></div>
                            <span>Name</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="" />
                            <div className="online"></div>
                            <span>Name</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default chatbar