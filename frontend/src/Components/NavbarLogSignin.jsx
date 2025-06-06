import React from 'react'
import { Link } from 'react-router'

const NavbarLogSignin = () => {
    return (
        <div className='bg-secondary'>
            <div className='mx-auto max-w-6xl p-4'>
                <div className='flex justify-between text-center'>
                    <Link to={"/"}>
                        <h3 className='card-title text-3xl'> Writing Blog</h3>
                    </Link>
                    <div>
                        <Link to={"/signup"} className='btn btn-accent mx-2'>
                            <span> Sign up</span>
                        </Link>
                        <Link to={"/login"} className='btn mx-2'>
                            <span> Log in</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarLogSignin