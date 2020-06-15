import React from 'react'

export default function CardBlog(props) {
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
                            <div className="column is-two-fifths">
                                <img src={props.thumbnail} alt="blog logo" />
                            </div>
                            <div className="column">
                                <p>{props.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href={props.link} className="card-footer-item" target="_blank">View</a>
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
