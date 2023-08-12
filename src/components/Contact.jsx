import React from "react";

export function Contact() {
  //make a contact page with links to github and deployed apps
  return (
    <div>
      <div> Contact </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <a
                href="https://github.com/bibimbop123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="Github"
                  width="100"
                  height="100"
                />
              </a>
            </div>
            <div className="col-sm">
              <a
                href="https://www.linkedin.com/in/brian-kim-0a0a1b1b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  width="100"
                  height="100"
                />
              </a>
            </div>
          </div>
          <footer className="footer">
            <p>Copyright © 2023 Brian Kim</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
