import React from 'react'
import './stories.scss'

const Strories = () => {

    //dummy data
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 2,
            name: "Ali Muthu",
            img: "https://images.pexels.com/photos/12444354/pexels-photo-12444354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            name: "Halimah Kassim",
            img: "https://images.pexels.com/photos/5823217/pexels-photo-5823217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 4,
            name: "Siti Fatimah",
            img: "https://images.pexels.com/photos/15732664/pexels-photo-15732664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={stories[1].img} alt="" />
                <span>{stories[1].name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story">
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Strories