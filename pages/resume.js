import React from 'react'
import Timeline from 'react-image-timeline';

export default function Resume() {
    const events = [
        {
            date: new Date(1990, 11, 21),
            text: "I was born in Bangkok, Thailand.",
            title: "Born",
            buttonText: '',
            imageUrl: "",
            onClick: console.log,
        },
        {
            date: new Date(2012, 7, 1),
            text: `While I was studying Computer Engineering, 
            I am an intern at TESA Hyper Camp 2012. Here I learn a lot about embedded system. 
            I have tried to build a project about voice recognition.`,
            title: "Internship at TESA",
            buttonText: '',
            imageUrl: "/img/resume/tesa.png",
            onClick: console.log,
        },
        {
            date: new Date(2013, 2, 1),
            text: "Graduating in computer engineering at Naresuan University, Pitsanulok, Thailand.",
            title: "Graduate Bachelor's Degree",
            buttonText: '',
            imageUrl: "/img/resume/nulogo.png",
            onClick: console.log,
        },
        {
            date: new Date(2013, 7, 1),
            text: `I worked in role Java developer. Developing web app for finance business. 
            I learned a lot about Jira and Linux cause here we used Ubuntu for develop project.
            My responsibility was develop part of loan and payment modules.`,
            title: "Start working at AR Soft Co., Ltd.",
            buttonText: '',
            imageUrl: "/img/resume/ar.png",
            onClick: console.log,
        },
        {
            date: new Date(2015, 1, 1),
            text: `I switched programming language from Java to .Net C#. I think It's just different syntax. 
            I worked here for many years, Have worked on many projects. Here the team is strong and nice.`,
            title: "Start working at Clicknext Co., Ltd.",
            buttonText: '',
            imageUrl: "/img/resume/clicknext.png",
            onClick: console.log,
        },
        {
            date: new Date(2019, 4, 1),
            text: `Here is probably the dream job of many people. I work as a software engineer. 
            Working with Cloud as GCP, DevOps, NodeJs, .Net Core more. I love culture organization here.`,
            title: "Start working at Tangerine Co., Ltd.",
            buttonText: '',
            imageUrl: "/img/resume/tangerine.png",
            onClick: console.log,
        },
        {
            date: new Date(),
            text: `...`,
            title: "Now",
            buttonText: '',
            imageUrl: "",
            onClick: console.log,
        },
    ];

    return (
        <>
            <div className="component">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child box component-box">
                            <p className="subtitle">
                                <span className="component-title">RESUME</span>
                                <span> | Experience timeline. </span>
                            </p>
                            <div>

                            </div>
                            <div className="columns">
                                <Timeline events={events} />
                            </div>
                            <div className="resume-request is-size-4">
                                <a href="mailto:keerati.dir@gmail.com">
                                    Request More Info CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <style jsx>{`
                .resume-request {
                    text-align: center;
                }
                .resume-request a {
                    background-color: #eaeaea;
                    border-radius: 8px;
                    padding: 0 10px 0 10px;
                }
            `}</style>
        </>
    )
}
