import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React from "react";
import ReactDOMServer from "react-dom/server";
const HomePage = () => {
  return /* @__PURE__ */ jsx("h1", { children: "Heloo this is HomePage" });
};
const App = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Hello" }),
    /* @__PURE__ */ jsx("p", { children: "How are yu" }),
    /* @__PURE__ */ jsx("button", { children: "click" }),
    /* @__PURE__ */ jsx(HomePage, {})
  ] });
};
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
