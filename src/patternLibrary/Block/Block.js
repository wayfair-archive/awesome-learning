import React from "react";
import PropTypes from "prop-types";

const Block = ({
  is,
  children,
  mt,
  mb,
  ml,
  mr
}) => {
  const RenderedElement = is;
  return (
    <RenderedElement
      style={{
        marginTop: `${mt}`,
        marginRight: `${mr}`,
        marginBottom: `${mb}`,
        marginLeft: `${ml}`
      }}
    >
      {children}
    </RenderedElement>
  );
};

Block.propTypes = {
  is: PropTypes.string
};

Block.defaultProps = {
  is: "div",
  mb: "0px",
  mr: "0px",
  mt: "0px",
  ml: "0px"
};

export default Block;
