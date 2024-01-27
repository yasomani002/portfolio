import React from 'react'
import { makeStyles } from '@mui/styles'
import Typo from '../common/Typo'

const useStyles = makeStyles({
    container: {
        height: 'auto',
        minHeight: '10vh'
    }

})
const Title = props => {
    const classes = useStyles()
    return (

        <div className={classes.container} >
            <Typo varient="it01">
                Yash Somani
                <br />
                (Front End Developer)
            </Typo>
        </div>

    )
}

export default Title