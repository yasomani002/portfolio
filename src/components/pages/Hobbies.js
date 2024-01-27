import React from 'react'
import { TextContainer } from '../common/TextContainer'

const Hobbies = ({ data }) => {
    return (
        <div>
            <TextContainer
                title={data?.title}
                description={data?.description}
            />
        </div>
    )
}

export default Hobbies