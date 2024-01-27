import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    it01: {
        fontSize:'clamp(0.250rem , 5vw, 1.750rem)', //4px-28px
        fontFamily: 'Itim'
    },
    it02: {
        fontSize:'clamp(0.250rem , 5vw, 1.250rem)', //4px-20px
        fontFamily: 'Itim'
    },
    it03: {
        fontSize:'clamp(0.250rem , 5vw, 0.875rem)', //4px-14px
        fontFamily: 'Itim'
    }
})

const Typo = ({ children, varient }) => {
    const classes = useStyles()
    const varientData = {
        'it01': classes.it01,
        'it02': classes.it02,
        'it03': classes.it03,
    }
    return (
        <span className={varientData[varient]}> {children} </span>
    )
}

export default Typo