import React from "react";
import PropTypes from "prop-types";

import Scroll from "../utils/locomotiveScroll";
import "../styles/locomotive-scroll.css";

// This `location` prop will serve as a callback on route change
const Layout = ({ children, location }) => {
  return (
    <>
      {/* Here we pass the callbacks to the component. Anything that impacts the innerHeight, for example: Font Loaded */}
      <Scroll callbacks={location} />

      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
