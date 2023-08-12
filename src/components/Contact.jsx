import React from "react";

export function Contact() {
  //make a contact page with links to github and deployed apps
  return (
    <div>
      <div> Contact </div>
      <a
        href="https://github.com/bibimbop123"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="githubcontact"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Github"
          width="5px"
          height="5px"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/brian-kim-0a0a1b1b1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="linkedincontact"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
          alt="LinkedIn"
          width="5px"
          height="5px"
        />
      </a>
      <footer className="footer">
        <p>Copyright © 2023 Brian Kim</p>
      </footer>
    </div>
  );
}
