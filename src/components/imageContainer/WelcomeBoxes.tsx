import React from 'react'

interface propType {
    image: string
    description: string
}

const WelcomeBoxes = (props: propType) => {
    return(
        <div className='introBoxContainer'>
            <div className='imageBox'>
                <img src={props.image} alt="prop item" className='loadingScreenImage'/>

            </div>
            <h3>{props.description}</h3>
        </div>
    )
}

export default WelcomeBoxes