import React, { useState } from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

import SkillsS2 from '../components/SkillsS2'
import ContactS5 from '../components/ContactS5'

import { DEMOS } from '../components/Gallery/constants/demos'
import { ARTICLES } from '../components/Gallery/constants/articles'
// import ArticlesS4 from '../components/ArticlesS4'

const HomeIndex = () => {
  const siteTitle = 'Bahay Gulle Bilgi | Software Developer'
  const siteDescription = 'Portfolio website for Bahay Gulle Bilgi'
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
            <h2>About</h2>
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

        <section id="two">
          <header className="major">
            <h2>Technical Skills</h2>
          </header>
          <SkillsS2 />
        </section>

        <section id="three">
          <header className="major">
            <h2>Projects</h2>
          </header>
          <Gallery images={DEMOS} />
        </section>

        <section id="four">
          <header className="major">
            <h2>Selected Articles</h2>
            <Gallery images={ARTICLES} />
            {/* <ArticlesS4 /> */}
          </header>
        </section>

        <section id="five">
          <header className="major">
            <h2>Contact</h2>
          </header>
          <ContactS5 />
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
