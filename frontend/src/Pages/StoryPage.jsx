import React, { useState } from 'react'
import Story from '../Components/Story'
import StoryTitleBar from '../Components/StoryTitleBar';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { api } from '../App';

const StoryPage = () => {
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(api + "stories/" + id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: story.title,
                    text: story.text,
                    userID: story.userID,
                    blurb: story.text.substring(0, 40)
                })
            });

            const savedStory = await res.json();

            if (res.status == "200") {
                const userRes = await fetch(api + "users/" + story.userID);
                const user = await userRes.json();

                user.stories = user.stories.map(s => {
                    if (s._id === savedStory._id)
                        return savedStory
                    return s
                })

                const updateUserRes = await fetch(api + "users/" + user._id.toString(), {
                    method: "PUT",
                    headers: { "Content-Type": " application/json" },
                    body: JSON.stringify({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        password: user.password,
                        stories: user.stories
                    })
                });

            }
        } catch (error) {
            console.log("Cannot save story", error);
        }
    }

    useEffect(() => {
        const getStory = async () => {
            try {
                const res = await fetch(api + "stories/" + id);
                const data = await res.json();

                setStory(data);
                console.log(data);

            } catch (error) {
                console.log("Cannot get story", error);
            }
            finally {
                setLoading(false);
            }
        }
        getStory();
    }, []);

    if (loading) {
        return (<div> Loading...</div>)
    }



    return (
        <div className='bg-base-300 flex flex-col h-screen' >
            <StoryTitleBar story={story} handleSave={handleSave} />
            <Story story={story} />
        </div>



    )
}

export default StoryPage