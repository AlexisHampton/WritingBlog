import React, { useEffect, useState } from 'react'
import ProfileTitleBar from '../Components/ProfileTitleBar'
import { useNavigate, useParams } from 'react-router';
import { api } from '../App';
import Navbar from '../Components/Navbar';

const ProfilePage = () => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");


    const { id } = useParams();

    const nav = useNavigate();
    console.log(id);
    useEffect(() => {
        const findUser = async () => {
            try {
                const res = await fetch(api + "users/" + id);
                console.log(res);
                const data = await res.json();

                setUser(data);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.email);
            } catch (error) {
                console.log("Cannot get user", error);
            }
            finally {
                setLoading(false);

            }
        }
        findUser();
    }, [id]);

    if (loading) {
        return (
            <p>Loading... </p>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(api + "users/" + id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    password: user.password
                })
            });
            const data = res.json();

            nav(`/dashboard/${user._id}`);
        } catch (error) {
            console.log("Error updating profile information", error);
        }
    }

    return (
        <div>
            <Navbar redirect={`/dashboard/${user._id}`} />
            <div className='flex justify-center my-4  mx-auto container max-w-3xl bg-base-200'>
                <div className='card p-4 min-w-full'>
                    <h3 className='card-title flex justify-center text-center'> Update Profile</h3>
                    <form onSubmit={(e) => handleSubmit(e)} className='form-control'>
                        <label className='label'>
                            <span>First Name </span>
                        </label>
                        <input type="text"
                            className='input'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label className='label'>
                            <span>Last Name </span>
                        </label>
                        <input type="text"
                            className='input'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label className='label'>
                            <span>Email </span>
                        </label>
                        <input type="text"
                            className='input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className=' flex justify-center mx-auto mt-10 btn btn-primary max-w-fit'>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage