import React, { useEffect, useState } from 'react'

const Story = ({ story }) => {

    const [text, setText] = useState(story.text);

    const changeText = (e) => {
        setText(e.target.value);
        story.text = e.target.value;
    }

    return (
        <div className='container mx-auto mt-16 p-5'>
            <div className='max-w-4xl mx-auto bg-base-100'>
                <textarea type='text'
                    className='min-h-screen min-w-full bg-base-100 outline-none resize-none p-12'
                    value={text}
                    onChange={(e) => changeText(e)}
                />
            </div>
        </div>
    )
}

export default Story

