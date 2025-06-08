import React from 'react'
import { Link } from 'react-router'

const StoryCard = () => {
    return (
        <Link to={"/storyPage"} className=' card bg-primary m-10'>
            <div className='card-body'>
                <h3 className='card-title'> Name</h3>
                <h4 className='text-wrap'>Jimin’s paintbrush swishes across the canvas. Gold streaks across beautiful black hair, sharp eyebrows, sunken cheeks, and a long, slender neck, not littered with red rings. She’s a regal queen, a woman of wonder, who once promised Jimin the world if he lent her his crown. But it melts in gold, dripping down her cheeks, washing away the royal foundation to reveal the wretched peasant underneath. </h4>
            </div>
        </Link>
    )
}



export default StoryCard