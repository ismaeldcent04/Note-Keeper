import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  var Appname = "Keeper";

  return (
    <header>
      <h1>
        <HighlightIcon />
        {Appname}
      </h1>
    </header>
  );
}

export default Header;
