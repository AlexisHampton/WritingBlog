import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import NavbarLogSignin from '../Components/NavbarLogSignin'
import { Link } from 'react-router'
import HomepageStoryCard from '../Components/HomepageStoryCard'
import { api } from '../App'

const HomePage = () => {

    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const findAllStories = async () => {
            try {
                const res = await fetch(api + "stories/");
                const data = await res.json();
                setStories(data);
                console.log(data);
            } catch (error) {
                console.log("Error finding all users", error);
            }
            finally {
                setLoading(false);
            }
        }
        findAllStories();
    }, [])

    if (loading)
        return (<div> Loading...</div>)


    return (
        <div>
            <NavbarLogSignin />
            <div className='container flex justify-center mx-auto min-w-full bg-base-100 p-9'>
                <div className='min-w-full'>
                    <h3 className='font-bold text-2xl mb-2'> User stories</h3>
                    {stories.length > 0 && stories.map(story => <HomepageStoryCard key={story._id} story={story} />)}
                </div>

            </div>
        </div>
    )
}

export default HomePage