import React from 'react'
import jslogo from '../assets/images/logos/JS.png'
import rubylogo from '../assets/images/logos/Ruby.png'
import reactlogo from '../assets/images/logos/React.png'
import railslogo from '../assets/images/logos/Rails.png'
import htmllogo from '../assets/images/logos/HTML.png'
import csslogo from '../assets/images/logos/CSS.png'
import sqllogo from '../assets/images/logos/SQL.png'
import postgresqllogo from '../assets/images/logos/PostgreSQL.png'
import gitlogo from '../assets/images/logos/Git.png'
import githublogo from '../assets/images/logos/GitHub.png'

const Section2 = () => {
  return (
    <ul className="logos">
      <li>
        <img src={jslogo} alt="JS logo" />
        <span className="caption">JavaScript</span>
      </li>
      <li>
        <img src={rubylogo} alt="Ruby logo" />
        <span className="caption" style={{ marginLeft: '0.8em' }}>
          Ruby
        </span>
      </li>
      <li>
        <img src={reactlogo} alt="React logo" />
        <span className="caption" style={{ marginLeft: '0.8em' }}>
          React
        </span>
      </li>
      <li>
        <img src={railslogo} alt="Rails logo" />
        <span className="caption" style={{ marginLeft: '1em' }}>
          Rails
        </span>
      </li>
      <li>
        <img src={htmllogo} alt="HTML logo" />
        <span className="caption" style={{ marginLeft: '0.7em' }}>
          HTML
        </span>
      </li>
      <li>
        <img src={csslogo} alt="CSS logo" />
        <span className="caption" style={{ marginLeft: '1em' }}>
          CSS
        </span>
      </li>
      <li>
        <img src={sqllogo} alt="SQL logo" />
        <span className="caption" style={{ marginLeft: '1.2em' }}>
          SQL
        </span>
      </li>
      <li>
        <img src={postgresqllogo} alt="PostgreSQL logo" />
        <span className="caption">PostgreSQL</span>
      </li>
      <li>
        <img src={gitlogo} alt="Git logo" />
        <span className="caption" style={{ marginLeft: '1.4em' }}>
          Git
        </span>
      </li>
      <li>
        <img src={githublogo} alt="GitHub logo" />
        <span className="caption" style={{ marginLeft: '0.6em' }}>
          GitHub
        </span>
      </li>
    </ul>
  )
}

export default Section2
