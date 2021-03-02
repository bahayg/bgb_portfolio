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
              An aspiring full-stack software developer experienced in Ruby on
              Rails and JavaScript based programming with a background in
              academia.
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
              An aspiring full-stack software developer experienced in Ruby on
              Rails and JavaScript based programming with a background in
              academia.
              <br />
              <br />
              Before making my transition into tech, I received my Ph.D. in
              biochemistry and worked as an associate faculty at Cascadia
              College. Having a background in science helped me to learn new
              skills quickly and collaborate to solve complex problems as a
              detail-oriented, organized, and focused team member. I’ve always
              been intrigued by learning new things and coding became my new
              love to make a difference in the lives of others.
              <br />
              <br />
              My transition to programming started as a self-motivated student
              and then I graduated from an intensive immersive software
              engineering bootcamp in Seattle. Throughout my learning journey, I
              was able to develop full-stack web applications and contribute to
              an open-source project which gave me a chance to collaborate with
              talented developers.
              <br />
              <br />I am passionate about using my technical skills along with
              my research and teaching background in both independent and
              collaborative settings to build products that help improve
              people’s lives. I’m excited to join a company where continuous
              learning, diversity, and collaboration are core values. 
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
            <h2>Projects</h2>
          </header>
          <Gallery images={DEMOS} />
        </section>

        <section id="three">
          <header className="major">
            <h2>Technical Skills</h2>
          </header>
          <SkillsS2 />
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
