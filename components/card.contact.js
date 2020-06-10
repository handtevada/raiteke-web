import React from 'react'

export default function CardContact(props) {
    return (
        <>
            <a className="card-contact" href={props.link} target="_blank">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <div className="columns">
                                <div className="column is-one-third align-center card-contact-icon">
                                    {props.icon}
                                </div>
                                <div className="column">
                                    <h1>{props.title}</h1>
                                    <p>{props.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <style jsx>{`
                .card {
                    border-radius: 10px;
                }
                .card-contact-icon {
                    color: #4a4a4a;
                }
                .card-content:hover {
                    background-color: #f1f1f1;
                    border-radius: 10px;
                }
            `}</style>
        </>
    )
}
