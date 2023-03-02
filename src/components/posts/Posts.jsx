import React from 'react'
import Post from '../../components/post/Post'

const Posts = () => {

    const posts = [
        {
            id: 1,
            name: "John Doe",
            status: "1 min ago",
            userId: 1,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            name: "Jane Doe",
            status: "20 min ago",
            userId: 2,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
        },
        {
            id: 3,
            name: "Jane Doe",
            status: "Online",
            userId: 3,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
            img: "https://images.pexels.com/photos/5823217/pexels-photo-5823217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];


    return (

        <div className="posts">
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>

    )
}

export default Posts