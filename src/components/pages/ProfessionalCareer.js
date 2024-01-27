import React from 'react'
import { TextContainer } from '../common/TextContainer'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        maxHeight: '57vh',
        overflow: 'auto',
        // '&:hover': {
        //     transition: '0.2s',
        //     transform: 'scale(1.05)',
        //     border: '2px solid #ffffff',
        //     borderRadius: '5px',
        //     padding: '15px'
        // }
    }

})
export const ProfessionalCareer = ({ data }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <TextContainer
                title={data?.title}
                description={data?.description}
                roleDetails={data?.roleDetails}
            />
        </div>
    )
}
