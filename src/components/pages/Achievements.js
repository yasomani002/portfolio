import React from 'react'
import { TextContainer } from '../common/TextContainer'

export const Achievements = ({ data }) => {
    return (
        <div>
            <TextContainer
                title={data?.title}
                roleDetails={data?.roleDetails}
            />
        </div>
    )
}
