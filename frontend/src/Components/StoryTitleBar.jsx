import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';

const StoryTitleBar = ({ story, handleSave }) => {
    const [title, setTitle] = useState(story.title);
    const [saving, setSaving] = useState(" ");

    const nav = useNavigate();

    const changeTitle = (e) => {
        console.log(e.target.value);
        setTitle(e.target.value);
        story.title = e.target.value;
    }

    const onSave = async (e) => {
        e.preventDefault();
        try {
            setSaving("Saving...");
            await handleSave(e);
        } catch (error) {
            console.log("Error saving", error);
        }
        finally {
            setSaving("Saved");
        }
    }

    const onEditInfo = async (e) => {
        e.preventDefault();
        try {
            setSaving("Saving...");
            await handleSave(e);
            setSaving("Saved");
            nav(`/storyinfo/${story._id}`)
        } catch (error) {
            console.log("Error saving", error);
        }
    }

    return (
        <div className='fixed h-20 top-0 left-0 right-0 bg-secondary min-w-full '>
            <div className='flex justify-between mx-auto py-4'>
                <div className='flex justify-center ml-20 mr-5'>
                    <Link to={"/dashboard/" + story.userID} className='btn btn-ghost  '>
                        <span> {"<- back"}</span>
                    </Link>
                    <input className='card-title text-neutral text-3xl outline-none bg-base-100 bg-opacity-30 text-opacity-100  px-3 min-w-full'
                        placeholder="Story Name"
                        value={title}
                        id="title"
                        onChange={(e) => changeTitle(e)}
                    />

                </div>
                <div className='flex justify-around mr-5'>
                    <h4 className='mt-3 mr-5'> {saving} </h4>
                    <button onClick={(e) => onSave(e)} className='btn btn-accent'>
                        <span> Save </span>
                    </button>
                    <button onClick={(e) => onEditInfo(e)} className='btn btn-primary ml-5'>
                        <span> Edit Info </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StoryTitleBar

/* 

*/