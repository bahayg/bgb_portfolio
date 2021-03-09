import React from 'react'

const ContactS5 = () => {
  return (
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
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:Bahay Gulle Bilgi <bahayg@gmail.com>"
          >
            bahayg@gmail.com
          </a>
        </li>
        <li>
          <h3 className="icon fa-linkedin-square">
            <span className="label">LinkedIn</span>
          </h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bahay-gulle-bilgi"
            style={{ whiteSpace: 'nowrap' }}
          >
            https://www.linkedin.com/in/bahay-gulle-bilgi
          </a>
        </li>
        <li>
          <h3 className="icon fab fa-github-square">
            <span className="label">GitHub</span>
          </h3>
          <a target="_blank" rel="noreferrer" href="https://github.com/bahayg">
            https://github.com/bahayg
          </a>
        </li>
        <li>
          <h3 className="icon fa-medium">
            <span className="label">Medium</span>
          </h3>
          <a target="_blank" rel="noreferrer" href="https://bahayg.medium.com">
            https://bahayg.medium.com
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContactS5

// <p>
//     Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
//     magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
//     vulputate lorem neque lorem ipsum dolor.
//   </p>
//   <div className="row">
//     <div className="8u 12u$(small)">
//       <form method="post" action="#">
//         <div className="row uniform 50%">
//           <div className="6u 12u$(xsmall)">
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Name"
//             />
//           </div>
//           <div className="6u 12u$(xsmall)">
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Email"
//             />
//           </div>
//           <div className="12u">
//             <textarea
//               name="message"
//               id="message"
//               placeholder="Message"
//               rows="4"
//             ></textarea>
//           </div>
//         </div>
//         <ul className="actions" style={{ marginTop: 30 }}>
//           <li>
//             <input type="submit" value="Send Message" />
//           </li>
//         </ul>
//       </form>
//     </div>
//               </div>
