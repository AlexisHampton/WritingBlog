import React, { useState } from 'react'
import { Link } from 'react-router'

const ProfileDashboardBar = (name) => {
    console.log("name", name.name);
    return (
        <div className='h-screen flex flex-col bg-accent'>
            <div className='container'>
                <div className='card flex mx-auto justify-center'>
                    <div className='card-body'>
                        <img src={'/HayleyProfPicture.JPG'} alt={`${name} profile picture`} className='rounded-full object-cover' />
                        <h3 className='card-title text-center mx-auto mt-5'>{`${name.name}`}</h3>
                        <Link to={"/storyPage"} className="btn btn-secondary mt-9">
                            <span> New story</span>
                        </Link>
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