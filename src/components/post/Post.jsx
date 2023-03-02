import React from 'react'
import './post.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const likes = false;

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.img} alt="" />
                        <div className="details">
                            <Link to={`./profile/${post.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='status'>{post.status}</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {likes ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        <p>15 likes</p>
                    </div>
                    <div className="item">
                        <TextsmsOutlinedIcon />
                        <p>2 comments</p>
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        <p>200 shares</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post