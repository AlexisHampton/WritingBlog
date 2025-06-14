import React from 'react'

const Error = ({ message }) => {
    return (
        <div className=' min-w-3xl min-h-full'>
            <Navbar />
            <div className='flex justify-center mx-auto mt-10'>
                <div className='container h-64'>
                    <div className='card  h-full'>
                        <h3 className='card-title  mx-auto my-auto'>
                            {`${message}. Please try again later.`}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error