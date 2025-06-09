import React from 'react'
import ProfileDashboardBar from '../Components/ProfileDashboardBar'
import StoryCard from '../Components/storyCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { api } from '../App'
import { useNavigate, useParams } from 'react-router'

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const [stories, setStories] = useState([]);

    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const nav = useNavigate();

    useEffect(() => {
        const findUser = async () => {
            try {
                const res = await fetch(api + "users/" + id);
                const data = await res.json();
                setUser(data);
                setStories(data.stories);

            } catch (error) {
                console.log("Cannot find user in dashboard", error);
            } finally {
                setLoading(false);
            }
        }
        findUser().then(() => {


        });

    }, [id]);

    if (loading) {
        return (
            <div>
                <p> Loading...</p>
            </div>
        )
    }



    const handleNewStory = async (e) => {
        e.preventDefault();
        console.log("button clicked");
        try {
            //user to be added to story and create new story

            const res = await fetch(api + "stories/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: "Untitled",
                    text: " ",
                    blurb: " ",
                    userID: user._id.toString()
                })
            });

            const data = await res.json();
            user.stories.push(data)
            console.log(user.stories)

            const resUser = await fetch(api + "users/" + id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    password: user.password,
                    stories: user.stories
                })
            })
            const dataUser = await resUser.json();
            console.log(dataUser);
            setStories(user.stories);
            console.log(data._id);
            nav("/storyPage/" + data._id);
        } catch (error) {
            console.log("Error creating new story in dashboard", error);
        }
    }

    console.log(user.firstName);
    console.log(user.stories);

    //find profile with id
    return (
        <div>
            <div className='fixed w-1/6 '>
                <ProfileDashboardBar name={`${user.firstName}  ${user.lastName}`} handleNewStory={handleNewStory} />
            </div>
            <div className='w-5/6 ml-auto'>
                <div className=' bg-secondary p-4 flex justify-center mx-auto '>
                    <h3 className='card-title text-3xl mx-auto'> Stories </h3>
                </div>

                {stories.length > 0 &&
                    <div className='m-10' >
                        {stories.map(story => (<StoryCard key={story._id} story={story} setStories={setStories} />))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Dashboard