import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router';
import Navbar from '../Components/Navbar';

const LoginPage = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='min-h-full'>
            <Navbar />
            <div className='container mx-auto'>
                <div className='max-w-2xl mx-auto'>
                    <div className='card mt-10 bg-base-300'>
                        <div className='card-body'>
                            <h3 className='card-title '> Log in to your Writing account</h3>
                            <form className='form'>
                                <div className='form-control'>
                                    <label className='label mt-4'>
                                        <span className="label-text"> Username</span>
                                    </label>
                                    <input type="text"
                                        className='input '
                                        placeholder='username'
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label mt-4'>
                                        <span className="label-text"> Password</span>
                                    </label>
                                    <input type="password"
                                        className='input '
                                        placeholder='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='flex text-center justify-center'>
                                    <button className='btn btn-primary mt-6'>
                                        Log in
                                    </button>
                                </div>

                            </form>
                            <div className='flex justify-center mx-auto'>
                                <Link to={"/"} className="text-sm">
                                    <span className='underline text-info mx-1'> Forgot password?</span>
                                </Link>
                                <Link to={"/signup"} className="text-sm">
                                    <span className='underline text-info mx-1'> Don't have an account?</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default LoginPage