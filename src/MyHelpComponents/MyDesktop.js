import React, { useLayoutEffect, useState } from "react";

export const MyDesktop = (props) => {
  const [windowSize, setwindowSize] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setwindowSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <React.Fragment>{windowSize >= 768 ? props.children : null}</React.Fragment>
  );
};

export default MyDesktop;
