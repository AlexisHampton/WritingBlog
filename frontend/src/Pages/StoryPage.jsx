import React, { useState } from 'react'
import Story from '../Components/Story'
import StoryTitleBar from '../Components/StoryTitleBar';

const StoryPage = () => {
    const placeholder = `Jimin’s paintbrush swishes across the canvas. Gold streaks across beautiful black hair, sharp eyebrows, sunken cheeks, and a long, slender neck, not littered with red rings. She’s a regal queen, a woman of wonder, who once promised Jimin the world if he lent her his crown. But it melts in gold, dripping down her cheeks, washing away the royal foundation to reveal the wretched peasant underneath. 

She wasn’t a horrible woman by any means. Just not as gracious and kind as others knew her. Maybe he’d follow her fate. Throw his arts scholarship to the wind and exchange hot food he was to give to his only son for a couple of sips of temporary ecstasy.`

    return (
        <div className='bg-base-300'>
            <StoryTitleBar />
            <Story />
        </div>



    )
}

export default StoryPage