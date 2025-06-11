import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';
import { api } from '../App';

const ProfileTitleBar = ({ user }) => {



    return (

        <div className='fixed h-20 top-0 left-0 right-0 bg-primary min-w-full '>
            <div className='flex justify-between mx-auto py-4'>
                <div className='flex justify-between'>
                    <Link to={"/dashboard/" + user._id} className='btn btn-ghost mx-5'>
                        <span> {"<- back"}</span>
                    </Link>
                    <h3 className='card-title'>
                        {`Hello, ${user.firstName} ${user.lastName}`}                    </h3>
                </div>

            </div>
        </div>
    )
}

export default ProfileTitleBar

/* 

*/