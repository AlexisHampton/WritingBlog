import React, { useState } from 'react'
import { Link } from 'react-router';

const StoryTitleBar = ({ story, handleSave }) => {
    const [title, setTitle] = useState(story.title);
    const [saving, setSaving] = useState(" ");

    const changeTitle = (e) => {
        console.log(e.target.value);
        setTitle(e.target.value);
        story.title = e.target.value;
    }

    const onSave = async (e) => {
        try {
            setSaving("Saving...");
            await handleSave(e);
        } catch (error) {

        }
        finally {
            setSaving("Saved");
        }

    }

    return (

        <div className='fixed h-20 top-0 left-0 right-0 bg-primary min-w-full '>
            <div className='flex justify-between mx-auto py-4'>
                <div className='flex justify-center'>
                    <Link to={"/dashboard/" + story.userID} className='btn btn-ghost mx-5'>
                        <span> {"<- back"}</span>
                    </Link>
                    <input className='card-title text-neutral text-3xl outline-none bg-base-100 bg-opacity-30  text-opacity-100  px-3 w-full'
                        placeholder="Story Name"
                        value={title}
                        id="title"
                        onChange={(e) => changeTitle(e)}
                    />

                </div>
                <div className='flex justify-around mx-5'>
                    <h4 className='mt-3 mr-5'> {saving} </h4>
                    <button onClick={(e) => onSave(e)} className='btn btn-secondary'>
                        <span> Save </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StoryTitleBar

/* 

*/