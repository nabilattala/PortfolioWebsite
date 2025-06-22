// import React from "react";
// function Pre(props) {
//   return <div id={props.load ? "preloader" : "preloader-none"}></div>;
// }

// export default Pre;
 
import React from "react";

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      {load && <div className="loader"></div>}
    </div>
  );
}

export default Pre;
