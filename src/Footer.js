import React, { Component } from 'react';
import './css/style.css'

export default class Footer extends Component {

  render() {
    return (
        <div className="footer">

          <h2>Contact Me</h2>
          <h5>I'd love to hear from you!</h5>
          <p></p>
          <div>
          <a href='https://www.linkedin.com/in/tesiawu/' style={{color: "white"}}>
             <i class="fab fa-linkedin fa-2x"></i>
          </a> &nbsp;&nbsp;
          <a href='https://github.com/tesiawu/' style={{color: "white"}}>
            <i class="fab fa-github fa-2x"></i>
          </a> &nbsp;&nbsp;
          <a href='mailto: tesiawu@utexas.com' style={{color: "white"}}>
            <i class="far fa-envelope fa-2x"></i>
          </a>
          </div>



          <p style={{fontSize:"13px"}} className="copyright">
            &copy; Tesia Wu {new Date().getFullYear()}
            <br />
            All Rights Reserved. <br />
          </p>
        </div>
    );
  }

}
