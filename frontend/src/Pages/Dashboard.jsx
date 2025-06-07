import React from 'react'
import ProfileDashboardBar from '../Components/ProfileDashboardBar'
import StoryCard from '../Components/storyCard'

const Dashboard = () => {

    //find profile with id
    return (
        <div>
            <div className='fixed w-1/6 '>
                <ProfileDashboardBar />
            </div>
            <div className='w-5/6 ml-auto'>
                <div className=' bg-secondary p-4 flex justify-center mx-auto '>
                    <h3 className='card-title text-3xl mx-auto'> Stories </h3>
                </div>
                <div className='m-10' >
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />

                </div>

            </div>
        </div>
    )
}

export default Dashboard