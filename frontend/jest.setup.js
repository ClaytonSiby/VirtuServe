import "@testing-library/jest-dom";

// Mock framer-motion to avoid act warnings in tests
jest.mock("framer-motion", () => {
  const React = require("react");
  const make =
    (Tag) =>
    ({ children, ...props }) =>
      React.createElement(Tag, props, children);
  return {
    motion: {
      div: make("div"),
      nav: make("nav"),
      button: make("button"),
      span: make("span"),
      p: make("p"),
      section: make("section"),
    },
    AnimatePresence: ({ children }) =>
      React.createElement(React.Fragment, null, children),
  };
});
