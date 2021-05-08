import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("../stories/icomoons/selection.json");

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;