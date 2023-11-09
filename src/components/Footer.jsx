import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} Keeper App</p>
    </footer>
  );
}

export default Footer;
