import React from 'react'
import { Link, useNavigate } from 'react-router'
import { api } from '../App';

const StoryCard = ({ story, setStories }) => {

    const nav = useNavigate();

    const handleDeleteStory = async (e) => {
        e.preventDefault();
        if (!window.confirm("Are you sure you want to delete this story?")) return false;
        try {
            const res = await fetch(api + "stories/" + story._id);

            if (res.status == "200") {
                //delete the story
                const storyRes = await fetch(api + "stories/" + story._id, {
                    method: "DELETE"
                });

                //delete from user
                const userRes = await fetch(api + "users/" + story.userID);
                const user = await userRes.json();

                console.log(userRes);

                user.stories = user.stories.filter(s => s._id !== story._id);

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
                console.log(updateUserRes);
                setStories(user.stories);

            }


        } catch (error) {

        }
    }

    return (
        <div className=' card bg-primary m-10'>
            <div className='card-body'>
                <div className='flex justify-between'>
                    <Link to={`/storyPage/${story._id}`} className='card-title underline'> {story.title}</Link>
                    <div >
                        <Link to={`/storyinfo/${story._id}`} className='btn btn-secondary mx-4'>
                            <span className='text-neutral'> Edit Info</span>
                        </Link>
                        <button onClick={(e) => handleDeleteStory(e)} className='btn btn-error'>
                            <span> Delete</span>
                        </button>
                    </div>
                </div>
                <h4 className='text-wrap'> {story.blurb} </h4>
            </div>
        </div>
    )
}



export default StoryCard