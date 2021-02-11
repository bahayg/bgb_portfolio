import React, { useState } from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Bahay Gulle Bilgi | Software Developer'
  const siteDescription = 'My Portfolio'
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = (e) => {
    e.preventDefault()
    setShowMore(!showMore)
  }

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>About Me</h2>
          </header>
          {!showMore ? (
            <p>
              Full stack web developer with experience in JavaScript, UX
              framework React, and Ruby on Rails based programming...
              <ul className="actions" style={{ marginTop: 30 }}>
                <li>
                  <a onClick={handleShowMore} className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </p>
          ) : (
            <p>
              Full stack web developer with experience in JavaScript, UX
              framework React, and Ruby on Rails based programming. Transitioned
              from academia to coding to help technology companies bring
              innovative solutions to their customers and partners. With a Ph.D.
              in biochemistry and molecular biology, I developed strong skills
              in problem solving, critical/creative thinking, and interpreting
              data which translates well to writing code. I am excited to
              contribute to tech projects with my passion for designing web
              applications and the proven research, teaching, and mentoring
              skills I have gained to date.
              <ul className="actions" style={{ marginTop: 30 }}>
                <li>
                  <a onClick={handleShowMore} className="button">
                    Show Less
                  </a>
                </li>
              </ul>
            </p>
          )}
        </section>
        <section id="four">
          <header className="major">
            <h2>Technical Skills</h2>
          </header>
        </section>
        <section id="two">
          <header className="major">
            <h2>My Projects</h2>
          </header>

          <Gallery />
          {/* 
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        <section id="three">
          <header className="major">
            <h2>Contact Me</h2>
          </header>
          {/* <p>
            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
            magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
            vulputate lorem neque lorem ipsum dolor.
          </p> */}
          <div className="row">
            {/* <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div> */}
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Seattle, WA
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:Bahay Gulle Bilgi <bahayg@gmail.com>">
                    bahayg@gmail.com
                  </a>
                </li>
                <li>
                  <h3 className="icon fa-linkedin-square">
                    <span className="label">LinkedIn</span>
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/bahay-gulle-bilgi/"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    https://www.linkedin.com/in/bahay-gulle-bilgi/
                  </a>
                </li>
                <li>
                  <h3 className="icon fab fa-github-square">
                    <span className="label">GitHub</span>
                  </h3>
                  <a href="https://github.com/bahayg">
                    https://github.com/bahayg
                  </a>
                </li>
                <li>
                  <h3 className="icon fa-medium">
                    <span className="label">Medium</span>
                  </h3>
                  <a href="https://bahayg.medium.com/">
                    https://bahayg.medium.com/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
