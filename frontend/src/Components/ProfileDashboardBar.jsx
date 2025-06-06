import React from 'react'
import { Link } from 'react-router'

const ProfileDashboardBar = () => {
    return (
        <div className='min-h-full bg-accent'>
            <div className='container'>
                <div className='card flex justify-start'>
                    <div className='card-body'>

                        <h3 className='card-title'> Name</h3>
                        <Link className="btn btn-secondary mt-9">
                            <span> New story</span>
                        </Link>
                        <Link className='btn btn-ghost'>
                            <span> Profile</span>
                        </Link>
                        <Link className='btn btn-ghost'>
                            <span> Logout</span>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProfileDashboardBar