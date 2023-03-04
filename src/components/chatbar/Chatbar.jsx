import React from 'react'
import './chatbar.scss'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';

const chatbar = () => {
    return (
        <div className="chatbar">
            <div className="container">
                {/* <div className="item">
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
                </div> */}
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
                    <div className="itemMenu">
                        <span>Chat</span>
                        <MoreHorizIcon />
                    </div>
                    <input type="text" placeholder='Search' />
                    <Link to={"/register"}>
                        <div className="user">
                            <div className="userInfo">
                                <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="" />
                                <div className="online"></div>
                                <span>Seman Fastrexs</span>
                            </div>
                        </div>
                    </Link>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="" />
                            <div className="online"></div>
                            <span>Alif Shellout</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="" />
                            <div className="online"></div>
                            <span>Taqiy PPCM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default chatbar