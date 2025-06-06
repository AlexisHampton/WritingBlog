import React from 'react'
import Navbar from '../Components/Navbar'
import NavbarLogSignin from '../Components/NavbarLogSignin'
import { Link } from 'react-router'

const HomePage = () => {
    return (
        <div>
            <NavbarLogSignin />
            <div className='flex justify-center'>
                <Link to={"/dashboard"} className='btn btn-success btn-wide mt-8'>
                    To Dashboard
                </Link>
            </div>
        </div>
    )
}

export default HomePage