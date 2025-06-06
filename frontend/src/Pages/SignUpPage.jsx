import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar';

const SignUpPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='min-h-full'>
            <Navbar />
            <div className='container  mx-auto  '>
                <div className='card max-w-2xl mx-auto bg-base-300 mt-5'>
                    <div className='card-body '>
                        <h3 className='card-title'> Sign up</h3>
                        <form className='form'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'> First Name</span>
                                </label>
                                <input type='text'
                                    className='input'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'> Last Name</span>
                                </label>
                                <input type='text'
                                    className='input'
                                    onChange={(e) => setlastName(e.target.value)}
                                />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'> Username</span>
                                </label>
                                <input type='text'
                                    className='input'
                                    onChange={(e) => setusername(e.target.value)}
                                />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'> Password</span>
                                </label>
                                <input type='text'
                                    className='input'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='flex justify-center mt-7'>
                                <button className='btn btn-secondary'>
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SignUpPage