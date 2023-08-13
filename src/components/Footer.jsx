import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/bibimbop123"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="github"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Github"
          width="5px"
          height="5px"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/bibimbop/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="linkedin"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
          alt="LinkedIn"
          width="5px"
          height="5px"
        />
      </a>
      <p>Copyright © 2023 Brian Kim</p>
    </footer>
  );
}
