import React from 'react'

export default function CardProject(props) {
    return (
        <>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {props.title}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="columns">
                            <div className="column is-one-third align-center">
                                {props.icon}
                            </div>
                            <div className="column">
                                {props.content}
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href={props.blog} className="card-footer-item" target="_blank">Blog</a>
                    <a href={props.github} className="card-footer-item" target="_blank">GitHub</a>
                    <a href={props.demo} className="card-footer-item" target="_blank">Demo</a>
                </footer>
            </div>
            <style jsx>{`
                .card {
                    border-radius: 10px;
                }
                .card-content {
                    min-height: 200px;
                }
                .card-header {
                    background-color: #3185ed;
                    box-shadow: none;
                    border-radius: 10px 10px 0 0;
                }
                .card-header-title {
                    color: #fff;
                }
            `}</style>
        </>
    )
}
