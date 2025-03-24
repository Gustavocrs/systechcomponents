import React from 'react';

// src/components/Button.jsx
var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, children);
};
 // Certifique-se de que está exportando como default

export { Button as default };
