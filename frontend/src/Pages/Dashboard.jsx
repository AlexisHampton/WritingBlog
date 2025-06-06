import React from 'react'
import ProfileDashboardBar from '../Components/ProfileDashboardBar'

const Dashboard = () => {

    //find profile with id
    return (
        <div className='grid grid-cols-6'>
            <ProfileDashboardBar />
            <p className='col-span-5'>
                Jimin’s paintbrush swishes across the canvas. Gold streaks across beautiful black hair, sharp eyebrows, sunken cheeks, and a long, slender neck, not littered with red rings. She’s a regal queen, a woman of wonder, who once promised Jimin the world if he lent her his crown. But it melts in gold, dripping down her cheeks, washing away the royal foundation to reveal the wretched peasant underneath.
            </p>
        </div>
    )
}

export default Dashboard