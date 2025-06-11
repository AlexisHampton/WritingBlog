import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar';
import { api } from '../App';
import { useNavigate } from 'react-router';

const SignUpPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUpTrouble, setSignUpTrouble] = useState(false);

    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch(api + "users", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    email: email.trim(),
                    password: password
                })
            });

            const { id } = await res.json();
            console.log(res);

            nav(`/dashboard/${id}`);


        } catch (error) {
            console.log(error);
            setSignUpTrouble(true);
            console.log("Trouble signing up in sign up page", error);
        }
    }

    return (
        <div className='min-h-full'>
            <Navbar />
            <div className='container  mx-auto  '>
                <div className='card max-w-2xl mx-auto bg-base-300 mt-5'>
                    <div className='card-body '>
                        <h3 className='card-title'> Sign up</h3>
                        <form onSubmit={(e) => handleSubmit(e)} className='form'>
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
                                    <span className='label-text'> Email</span>
                                </label>
                                <input type='text'
                                    className='input'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'> Password</span>
                                </label>
                                <input type='password'
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