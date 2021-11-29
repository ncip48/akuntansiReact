import React from "react";
import Footer from "../Footer";

function Container({ children }) {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Container;
