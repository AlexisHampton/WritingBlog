import React, { useEffect, useState } from 'react'

const Story = () => {

    const placeholder = `Jimin’s paintbrush swishes across the canvas. Gold streaks across beautiful black hair, sharp eyebrows, sunken cheeks, and a long, slender neck, not littered with red rings. She’s a regal queen, a woman of wonder, who once promised Jimin the world if he lent her his crown. But it melts in gold, dripping down her cheeks, washing away the royal foundation to reveal the wretched peasant underneath. 

She wasn’t a horrible woman by any means. Just not as gracious and kind as others knew her. Maybe he’d follow her fate. Throw his arts scholarship to the wind and exchange hot food he was to give to his only son for a couple of sips of temporary ecstasy.
`
    const [text, setText] = useState(placeholder);

    return (
        <div className='container mx-auto mt-16 p-5'>
            <div className='max-w-4xl mx-auto bg-base-100'>
                <textarea type='text'
                    className='min-h-screen min-w-full bg-base-100 outline-none resize-none p-12'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Story

/*
<div className='container mx-auto mt-16 p-5'>
            <div className='max-w-4xl mx-auto bg-base-100'>
                <textarea type='text'
                    className='min-h-screen min-w-full bg-base-100 outline-none resize-none p-12'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </div> */