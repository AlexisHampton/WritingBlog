import React from 'react'
import ProfileDashboardBar from '../Components/ProfileDashboardBar'
import StoryCard from '../Components/storyCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { api } from '../App'
import { useParams } from 'react-router'

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const findUser = async () => {
            try {
                const res = await fetch(api + "users/" + id);
                const data = await res.json();
                setUser(data);

            } catch (error) {
                console.log("Cannot find user in dashboard", error);
            } finally {
                setLoading(false);
            }
        }
        findUser();
    }, [id]);

    if (loading) {
        return (
            <div>
                <p> Loading...</p>
            </div>
        )
    }

    console.log(user.firstName);
    //find profile with id
    return (
        <div>
            <div className='fixed w-1/6 '>
                <ProfileDashboardBar name={`${user.firstName}  ${user.lastName}`} />
            </div>
            <div className='w-5/6 ml-auto'>
                <div className=' bg-secondary p-4 flex justify-center mx-auto '>
                    <h3 className='card-title text-3xl mx-auto'> Stories </h3>
                </div>
                <div className='m-10' >
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />

                </div>

            </div>
        </div>
    )
}

export default Dashboard