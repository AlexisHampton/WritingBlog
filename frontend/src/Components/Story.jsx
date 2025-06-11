import React, { useEffect, useState } from 'react'

const Story = ({ story }) => {

    const [text, setText] = useState(story.text);

    const changeText = (e) => {
        setText(e.target.value);
        story.text = e.target.value;
    }

    return (
        <div className='flex-1 h-full container mx-auto mt-16 p-5'>
            <div className='max-w-4xl h-full mx-auto bg-base-100'>
                <textarea type='text'
                    className='h-full min-w-full bg-base-100 outline-none resize-none p-12'
                    value={text}
                    onChange={(e) => changeText(e)}
                />
            </div>
        </div>
    )
}

export default Story

