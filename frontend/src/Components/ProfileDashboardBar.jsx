import React, { useState } from 'react'
import { Link } from 'react-router'

const ProfileDashboardBar = ({ name, handleNewStory }) => {
    console.log("name", name);



    return (
        <div className='h-screen flex flex-col bg-accent'>
            <div className='container'>
                <div className='card flex mx-auto justify-center'>
                    <div className='card-body'>
                        <img src={'/HayleyProfPicture.JPG'} alt={`${name} profile picture`} className='rounded-full object-cover' />
                        <h3 className='card-title text-center mx-auto mt-5'>{`${name}`}</h3>
                        <button onClick={(e) => handleNewStory(e)} className="btn btn-secondary mt-9">
                            <span> New story</span>
                        </button>
                        <Link className='btn btn-ghost'>
                            <span> Profile</span>
                        </Link>
                        <Link to={"/"} className='btn btn-ghost'>
                            <span> Logout</span>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileDashboardBar 