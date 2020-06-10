import React from 'react'

export default function Home() {
  return (
    <>
      <section className="hero is-medium is-bold">
        <div className="hero-body">
          <div className="container">
            <div>
              <h1 className="title is-size-1">
                Keerati Yuonghirun
              </h1>
              <h2 className="subtitle">
                Software Engineer (Full Stack Developer)
              </h2>
            </div>
            <div className="index-social" >
              <a href="https://twitter.com/Algobaleno">
                <i className="fab fa-twitter fa-3x" />
              </a>
              <a href="https://www.instagram.com/directorysc/">
                <i className="fab fa-instagram fa-3x" />
              </a>
              <a href="https://github.com/handtevada">
                <i className="fab fa-github fa-3x" />
              </a>
              <a href="https://www.linkedin.com/in/keerati-yuonghirun-45a23967/">
                <i className="fab fa-linkedin fa-3x" />
              </a>
              <a href="https://www.facebook.com/directorys/">
                <i className="fab fa-facebook fa-3x" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
          .index-social {
            margin-top: 40px;
          }
          .index-social a {
            padding-right: 10px;
            color: #4a4a4a;
          }
          .index-social a:hover {
            color: #3273dc;
          }

      `}</style>
    </>
  )
}
