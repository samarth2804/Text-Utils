import React, { Component } from 'react';
import { AiFillGithub} from "react-icons/ai";

export class Footer extends Component {
  render() {
    let styles = {
      fontSize: '2em',
      color: 'black',
      marginLeft: '.9rem',
    };
    return (
      <div>
        <footer className="footer mt-auto py-3 bg-light">
          <div className="container text-center">
            <span className="text-muted">
              Made with ❤️ by Samarth-Verma.
              <a style={styles} href="https://github.com/samarth2804/Text-Utils">
                <AiFillGithub />
              </a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
