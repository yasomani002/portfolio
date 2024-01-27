import React from 'react'
import Typo from './Typo'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    divider: {
        backgroundColor: '#000000',
        height: '2px',
        width: '100%',
        margin: '10px 0'
    },
    roleDetialsContainer: {
        margin: '15px 0'
    }
})
export const TextContainer = ({ title, description, roleDetails }) => {
    const classes = useStyles()

    return (
        <>
            <Typo varient="it02">{title}</Typo>
            <div className={classes.divider}></div>
            {description?.map((data) => {
                return (
                    <>
                        <Typo varient="it03">
                            {data}
                            <br />
                        </Typo>
                    </>
                )
            })}
            {roleDetails?.map((data) => {
                return (
                    <div className={classes.roleDetialsContainer}>
                        {data?.role &&
                            <>
                                <Typo varient="it03">{data?.role}</Typo>
                                <br />
                            </>
                        }
                        <Typo varient="it03">{data?.roleDescription}</Typo>
                    </div>
                )
            })}

        </>
    )
}
