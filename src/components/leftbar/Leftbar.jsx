import React from 'react'
import "./leftbar.scss"
import Home from "../../assets/home.png"
import Marketplace from "../../assets/marketplace.png"
import Friend from "../../assets/1.png"

import Group from "../../assets/3.png"
import Events from "../../assets/4.png"
import Course from "../../assets/5.png"
import Fund from "../../assets/6.png"
import Gallery from "../../assets/7.png"
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function leftbar() {
    return (
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="item">
                        <img src={Home} alt="" />
                        <span>Home</span>
                    </div>
                    <div className="user">
                        <img src="https://images.pexels.com/photos/3543419/pexels-photo-3543419.jpeg" alt="profile" />
                        <span>Seman Ali</span>
                    </div>
                    <div className="item">
                        <img src={Marketplace} alt="" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Video</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Group</span>
                    <div className="item">
                        <img src={Course} alt="" />
                        <span>Myvi Gen2 Group Malaysia</span>
                    </div>
                    <div className="item">
                        <img src={Fund} alt="" />
                        <span>Nak Makan Apa Hari Ini</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Settings</span>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Group</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default leftbar