import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    const toggleStyles = (event) => {
        document.querySelector('.navbar-burger').classList.toggle('is-active')
        document.querySelector('.navbar-menu').classList.toggle('is-active')
    }

    return (
        <>
            <nav className="navbar navbar-web" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item is-size-3 logo-web">
                            RAITEKE<span>.</span>
                        </a>
                    </Link>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic" onClick={toggleStyles}>
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>
                <div id="navbarBasic" className="navbar-menu">
                    <div className="navbar-end">
                        <Link href="/">
                            <a className="navbar-item is-size-5">
                                Home
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="navbar-item is-size-5">
                                About
                            </a>
                        </Link>
                        <Link href="/resume">
                            <a className="navbar-item is-size-5">
                                Resume
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a className="navbar-item is-size-5">
                                Projects
                            </a>
                        </Link>
                        <Link href="/blogs">
                            <a className="navbar-item is-size-5">
                                Blogs
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="navbar-item is-size-5">
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
            <style jsx>{`
                .logo-web {
                    font-weight: 700;
                }
                .logo-web span {
                    color: #2080ee;
                }
                a.navbar-item:hover {
                    background-color: transparent;
                }
                a.navbar-item:focus {
                    background-color: transparent;
                }
                .navbar-web {
                    background-color: transparent;
                }
                @media screen and (max-width: 1023px){
                    .navbar-menu {
                        background-color: #fff;
                        box-shadow: 0 8px 16px rgba(10,10,10,.1);
                        padding: .5rem 0;
                        opacity: 0.90;
                        position: fixed;
                        overflow-y: auto;
                        right: 15px;
                        left: 15px;
                    }
                }
            `}</style>
        </>
    )
}
