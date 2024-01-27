import React from 'react'
import { TextContainer } from '../common/TextContainer';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        "&:hover": {
            // border: '1px solid #000000'
        }
    }

})
const Education = ({ data }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <TextContainer
                title={data?.title}
                description={data?.description}
            />
        </div>
    )
}

export default Education