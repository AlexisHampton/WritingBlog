import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { api } from '../App';
import { Link, useParams } from 'react-router';
import Loading from '../Components/Loading';

const ReadingPage = () => {

    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const findStory = async () => {
            try {
                const res = await fetch(api + "stories/" + id);
                const data = await res.json();
                setStory(data);
            } catch (error) {
                console.log("Cannot find story", error);
            }
            finally {
                setLoading(false);
            }
        }
        findStory();
    }, [])

    if (loading) return <Loading />


    return (
        <div>
            <div className='bg-primary min-w-full '>
                <div className='flex justify-between mx-auto py-4'>
                    <div className='flex justify-center'>
                        <Link to={"/"} className='btn btn-secondary text-black mx-5'>
                            <span> {"<- back"}</span>
                        </Link>
                        <h3 className='card-title text-neutral text-3xl'>
                            {story.title}
                        </h3>
                        <h4 className='card-title text-sm mx-4'>
                            {story.author}
                        </h4>
                    </div>
                </div>
            </div>

            <div className='container flex justify-center mx-auto  max-w-4xl'>
                <div className='my-10 h-fit'>
                    <pre className='font-sans text-wrap'>
                        {story.text}
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default ReadingPage