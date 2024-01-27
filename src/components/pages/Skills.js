import React from 'react'
import { TextContainer } from '../common/TextContainer'

export const Skills = ({ data }) => {
    return (
        <div>
            <TextContainer
                title={data?.title}
                description={data?.description}
            />
        </div>
    )
}
