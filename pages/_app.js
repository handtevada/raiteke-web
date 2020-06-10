import React from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'
import '../assets/styles/styles.scss'
import '../assets/styles/timeline.scss'

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>RAITEKE</title>

                <meta content="" name="description" />
                <meta content="" name="keywords" />
                {/* Google Fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
                {/* <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script> */}
            </Head>
            <section className="section">
                <div className="container">
                    <Navbar isIndex="true" />
                    <Component {...pageProps} />
                </div>
            </section>

            <footer className="web-footer is-size-6">
                @2020 | Photo by Vincent Guth on Unsplash | Template <a href="https://github.com/apsychogirl/portfolio">apsychogirl</a>
            </footer>
        </div>
    );
}
