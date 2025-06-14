import React, { useState } from 'react'
import { Link } from 'react-router'

const ProfileDashboardBar = ({ user, handleNewStory }) => {


    return (
        <div className='h-screen flex flex-col bg-base-300'>
            <div className='container'>
                <div className='card flex mx-auto justify-center'>
                    <div className='card-body'>
                        <img src={'/HayleyProfPicture.JPG'} alt={`${user.firstName}'s profile picture`} className='rounded-full object-cover' />
                        <h3 className='card-title text-center mx-auto mt-5'>{`${user.firstName} ${user.lastName}`}</h3>
                        <button onClick={(e) => handleNewStory(e)} className="btn btn-accent  mt-9">
                            <span> New story</span>
                        </button>
                        <Link to={`/profile/${user._id}`} className='btn btn-ghost'>
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