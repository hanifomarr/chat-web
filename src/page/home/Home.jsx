import React from 'react'
import Strories from '../../components/stories/Strories'
import Posts from '../../components/posts/Posts'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'

const home = () => {
    return (
        <div className="homepage">
            <Strories />
            <Posts />

        </div>
    )
}

export default home