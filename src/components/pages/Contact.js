import { makeStyles } from '@mui/styles'
import React from 'react'
import Typo from '../common/Typo'

const useStyles = makeStyles({
    container: {
        height: 'auto',
        minHeight:'13.5vh',
    }

})
const Contact = () => {
    const classes = useStyles()

    return (
        <div className={classes.container} >
            <Typo varient="it03">
                Ahmedabad
                <br />
                (+91) 799 00 80 974
                <br />
                yasomani002@gmail.com
                (Front End Developer)
            </Typo>
        </div>

    )
}

export default Contact