import React from 'react'
import { Link } from 'react-router'

const Navbar = ({ redirect }) => {

    if (!redirect)
        redirect = "/";

    return (
        <div className='bg-secondary'>
            <div className='mx-auto max-w-6xl p-4'>
                <div className='flex justify-between text-center'>
                    <Link to={redirect}>
                        <h3 className='card-title text-3xl'> Writing Blog</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar