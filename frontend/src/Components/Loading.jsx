import React from 'react'
import Navbar from './Navbar'

const Loading = () => {
    return (
        <div className=' min-w-3xl min-h-full'>
            <Navbar />
            <div className='flex justify-center mx-auto mt-10'>
                <div className='container h-64'>
                    <div className='card  h-full'>
                        <h3 className='card-title  mx-auto my-auto'>
                            Loading...
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading