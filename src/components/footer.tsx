import React from "react";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="content">
            <p>
              This website is licensed under a{" "}
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-sa/4.0/"
              >
                Creative Commons Attribution-ShareAlike 4.0 International
                License
              </a>
              .
            </p>
            <p>
              Based on{" "}
              <a href="https://github.com/nerfies/nerfies.github.io">
                Nerfies' Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
