import React from "react";

function Footer() {
  var today = new Date();
  var CurrentYear = today.getFullYear();

  return (
    <footer>
      <p>Copyright © {CurrentYear}</p>
    </footer>
  );
}

export default Footer;
