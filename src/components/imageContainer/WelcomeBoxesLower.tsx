import React, {useEffect} from 'react'

interface propType {
    image: string
    description: string
}

const WelcomeBoxesLower = (props: propType) => {
    useEffect( () => {
        console.log('lower')
    }, [])

    return(
        <div className='introBoxContainerLower'>
            <div className='imageBox'>
                <img src={props.image} alt="prop item" className='loadingScreenImage'/>
            </div>
            <h3>{props.description}</h3>
        </div>
    )
}

export default WelcomeBoxesLower