import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bahay-gulle-bilgi/"
            className="icon fa-linkedin-square"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bahayg"
            className="icon fab fa-github-square"
          >
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bahayg.medium.com/"
            className="icon fa-medium"
          >
            <span className="label">Medium</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:<bahayg@gmail.com>"
            className="icon fa-envelope"
          >
            <span className="label">Email</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/18QQ9UuYVDusSE-7ivwMTUPlXsPw35frM/view"
            className="icon fa-file"
          >
            <span className="label">Resume</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design:{' '}
          <a target="_blank" rel="noreferrer" href="http://html5up.net">
            HTML5 UP
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
