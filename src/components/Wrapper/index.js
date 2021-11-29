import React from "react";

function Wrapper({ children }) {
  return (
    <div>
      <div id="wrapper">{children}</div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default Wrapper;
