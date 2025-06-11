import React from "react";
import { Link } from "react-router";

const HomepageStoryCard = ({ story }) => {

    return (
        <Link to={`/readingPage/${story._id}`} className=' card bg-primary m-10'>
            <div className='card-body'>
                <h3 className='card-title'> {story.title}</h3>
                <h5 className="text-sm"> {story.author} </h5>
                <h4 className='text-wrap'> {story.blurb} </h4>
            </div>
        </Link>
    )
}

export default HomepageStoryCard