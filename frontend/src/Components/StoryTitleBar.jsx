import React, { useState } from 'react'
import { Link } from 'react-router';

const StoryTitleBar = () => {
    const [title, setTitle] = useState("Story Name");

    return (

        <div className='fixed top-0 left-0 right-0 bg-base-300 min-w-full '>
            <div className='flex justify-center mx-auto py-5'>
                <div className='bg-base-300 mx-48'>
                    <div className='flex justify-center'>
                        <Link to={"/dashboard"} className='btn btn-ghost mx-5'>
                            <span> {"<-- back"}</span>
                        </Link>
                        <input className='card-title text-neutral text-3xl outline-none bg-base-300 text-center'
                            placeholder="Story Name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <button className='btn btn-primary mx-48'>
                    <span> Save </span>
                </button>
            </div>
        </div>
    )
}

export default StoryTitleBar

/* 

*/