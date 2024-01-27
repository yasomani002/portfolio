import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Title from './Title'
import Education from './Education'
import { ProfessionalCareer } from './ProfessionalCareer'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Achievements } from './Achievements'
import Hobbies from './Hobbies'
import Contact from './Contact'
import axios from 'axios'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        height: 'auto',
        maxWidth: '692px',
        width: 'auto',
        backgroundColor: '#BCCCF8',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    },
    textContainer: {
        margin: '20px 0'
    },
    panel: {
        display: 'grid',
        rowGap: '20px',
        padding: '10px',
    },
    '@media (max-width: 800px)': {
        body: {
            display: 'grid',
            gridTemplateColumns: '1fr'
        },
    }
})
const RootContainer = props => {
    const classes = useStyles()
    const [error, setError] = useState()
    const [leftResponse, setLeftResponse] = useState()
    const [rightResponse, setRightResponse] = useState()

    // const leftPannelData = [{
    //     education: {
    //         title: "EDUCATION",
    //         description: ["Gujarat Technological University, Morbi – B.E. (Industrial Engineering)(August 2017 – September 2020)"]
    //     },
    //     professionalCareer: {
    //         title: "PROFESSIONAL CAREER",
    //         description: ["Sketchish Designer LLP (Oct.2021 – Present)"],
    //         roleDetails: [
    //             {
    //                 role: "Designation:-",
    //                 roleDescription: "Jr. ReactJs Developer"
    //             },
    //             {
    //                 role: "My Role:-",
    //                 roleDescription: "As a Jr.React Js Developer I am working with UI development & Integration.Divide a whole UI into different component.Checked Rest API with help of Postman.Create endpoint & integrate in project.Developed parents components with using different library & technology like ( MUI | Storybook | Css | Scss )"
    //             },
    //             {
    //                 role: "Technology used :-",
    //                 roleDescription: "For design :- Figma , MUI( Material UI library ) For Integration :- ReactsJs ,JavaScript , Story Book ,Git, GitLab,Postman For Track Project :- Jira board"
    //             },
    //         ]
    //     },
    //     projects: {
    //         title: "PROJECTS",
    //         roleDetails: [
    //             {
    //                 role: "Portfolio:-",
    //                 roleDescription: "https://yasomani002.github.io/YashSomani.github.io/"
    //             },
    //             {
    //                 role: "Business website:-",
    //                 roleDescription: "https://yasomani002.github.io/shreeshava.github.io/"
    //             },
    //             {
    //                 role: "Short hand CSS tricks video:-",
    //                 roleDescription: "You can check this video in my Linkedin page.www.linkedin.com/in/yash-somani-002"
    //             },
    //             {
    //                 role: "Short hand CSS tricks video:-",
    //                 roleDescription: "You can check this video in my Linkedin page.www.linkedin.com/in/yash-somani-002"
    //             },
    //             {
    //                 role: "Short hand CSS tricks video:-",
    //                 roleDescription: "You can check this video in my Linkedin page.www.linkedin.com/in/yash-somani-002"
    //             },
    //         ]
    //     }
    // }]
    // const rightPannelData = [{
    //     skills: {
    //         title: "SKILLS",
    //         description: ["CSS & Scss", "", "JavaScript", "", "React Js", "", "HTML5", "", "Bootstrap", "", "Figma"]
    //     },
    //     achievements: {
    //         title: "ACHIEVEMENTS",
    //         roleDetails: [
    //             {
    //                 roleDescription: "Basic JavaScript & Introduction of React by Udemy."
    //             },
    //             {
    //                 roleDescription: "Digital Unlocked & Google Analytic Courses by Google."
    //             },
    //             {
    //                 roleDescription: "Successfully Completed Industry 4.0 by Tata Steel."
    //             },
    //             {
    //                 roleDescription: "Organize and also participate a drama competition at city level."
    //             },
    //             {
    //                 roleDescription: "Write more than 8 poems, 2 drama script & also performed in city level drama competition."
    //             },
    //         ]
    //     },
    //     hobbies: {
    //         title: "HOBBIES",
    //         description: ["Playing", "", "Guitar", "", "Content/Poem Writing", "", "Photography", "", "Reading Story", "", "Telling"]
    //     }
    // }]


    // api call for check doc sign status
    useEffect(() => {
        axios.get("https://65b3f716770d43aba47ac437.mockapi.io/portfolio/getData")
            .then((response) => setLeftResponse(response?.data))
            .catch((error) => setError(error))
    }, [])

    useEffect(() => {
        axios.get("https://65b3f716770d43aba47ac437.mockapi.io/portfolio/rightPanel")
            .then((response) => setRightResponse(response?.data))
            .catch((error) => setError(error))
    }, [])

    console.log(error)
    return (
        <>
            <div className={classes.root}>
                <div className={classes.body}>
                    {/* left pannel  */}
                    <div className={classes?.panel}>
                        {leftResponse?.map((data) => {

                            return (
                                <>
                                    <Title />
                                    <Education data={data?.education} />
                                    <ProfessionalCareer data={data?.professionalCareer} />
                                    <Projects data={data?.projects} />
                                </>
                            )
                        })}

                    </div>

                    {/* right pannel  */}
                    <div className={classes?.panel}>

                        {rightResponse?.map((data) => {

                            return (
                                <>
                                    <Contact />
                                    <Skills data={data?.skills} />
                                    <Achievements data={data?.achievements} />
                                    <Hobbies data={data?.hobbies} />
                                </>
                            )
                        })}

                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RootContainer