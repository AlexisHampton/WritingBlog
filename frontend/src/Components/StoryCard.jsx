import React from 'react'
import { Link } from 'react-router'
import { api } from '../App';

const StoryCard = ({ story, setStories }) => {

    const handleDeleteStory = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(api + "stories/" + story._id);

            if (res.status == "200") {
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
        <Link to={`/storyPage/${story._id}`} className=' card bg-primary m-10'>
            <div className='card-body'>
                <div className='flex justify-between'>
                    <h3 className='card-title'> {story.title}</h3>
                    <button onClick={(e) => handleDeleteStory(e)} className='btn btn-error'>
                        <span> Delete</span>
                    </button>
                </div>
                <h4 className='text-wrap'> {story.blurb} </h4>
            </div>
        </Link>
    )
}



export default StoryCard