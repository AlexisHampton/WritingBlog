import React, { useState } from 'react'
import Story from '../Components/Story'
import StoryTitleBar from '../Components/StoryTitleBar';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { api } from '../App';
import { saveStory } from '../utils/saveStory';
import Loading from '../Components/Loading';

const StoryPage = () => {
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const handleSave = async (e) => {
        e.preventDefault();
        const storyData = {
            title: story.title,
            text: story.text,
            userID: story.userID,
            blurb: story.text.substring(0, 40)
        };

        try {
            saveStory(id, storyData, story);
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

    if (loading)
        return <Loading />




    return (
        <div className='bg-base-200 flex flex-col h-screen' >
            <StoryTitleBar story={story} handleSave={handleSave} />
            <Story story={story} />
        </div>



    )
}

export default StoryPage