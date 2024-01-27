import React from 'react'
import { TextContainer } from '../common/TextContainer'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        maxHeight: '33vh',
        overflow: 'auto',
    }
})
export const Projects = ({ data }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <TextContainer
                title={data?.title}
                roleDetails={data?.roleDetails}
            />
        </div>
    )
}
