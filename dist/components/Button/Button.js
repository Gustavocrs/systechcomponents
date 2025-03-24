import React from 'react';
import styled from 'styled-components';

var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    _ref$configObj = _ref.configObj,
    configObj = _ref$configObj === void 0 ? {} : _ref$configObj;
  console.log("configObj", configObj);
  return /*#__PURE__*/React.createElement(SytledButton, {
    onClick: onClick,
    configObj: configObj
  }, children);
};
var SytledButton = styled.button.withConfig({
  displayName: "Button__SytledButton",
  componentId: "sc-d5iwd6-0"
})(["background-color:", ";width:", ";height:", ";font-size:", ";color:", ";border:none;border-radius:4px;padding:8px 16px;margin:5px;filter:drop-shadow(0px 2px 4px rgba(0,0,0,0.2));cursor:pointer;&:hover{background-color:", ";color:", ";transition:background-color 0.3s;}"], function (_ref2) {
  var configObj = _ref2.configObj;
  return (configObj === null || configObj === void 0 ? void 0 : configObj.backgroundColor) || "#007bff";
}, function (_ref3) {
  var configObj = _ref3.configObj;
  return (configObj === null || configObj === void 0 ? void 0 : configObj.width) || "120px";
}, function (_ref4) {
  var configObj = _ref4.configObj;
  return (configObj === null || configObj === void 0 ? void 0 : configObj.height) || "40px";
}, function (_ref5) {
  var configObj = _ref5.configObj;
  return (configObj === null || configObj === void 0 ? void 0 : configObj.fontSize) || "1rem";
}, function (_ref6) {
  var configObj = _ref6.configObj;
  return (configObj === null || configObj === void 0 ? void 0 : configObj.fontColor) || "#fff";
}, function (_ref7) {
  var configObj = _ref7.configObj;
  return (configObj === null || configObj === void 0 ? void 0 : configObj.hoverBackgroundColor) || "#0056b3";
}, function (_ref8) {
  var configObj = _ref8.configObj;
  return (configObj === null || configObj === void 0 ? void 0 : configObj.hoverFontColor) || "#0056b3";
});

export { Button };
