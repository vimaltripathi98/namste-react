// here first field is tag , than attribute than message/nested element
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "This Is My h1 Element"),
    React.createElement("h2", { key: "h2" }, "This Is My h2 Element"),
    React.createElement("h3", { key: "h3" }, "This Is My h3 Element"),
    React.createElement("h4", { key: "h4" }, "This Is My h4 Element"),
    React.createElement("h5", { id: "heading_h5", key: "h5" }, [
      React.createElement(
        "span",
        { id: "span_1", key: "span_1" },
        "This Is My span_1 Element"
      ),
      React.createElement(
        "span",
        { id: "span_2", key: "span_2" },
        "This Is My span_2 Element"
      ),
      React.createElement(
        "span",
        { id: "span_3", key: "span_3" },
        "This Is My span_3 Element"
      ),
      React.createElement(
        "span",
        { id: "span_4", key: "span_4" },
        "This Is My span_4 Element"
      ),
      React.createElement(
        "span",
        { id: "span_5", key: "span_5" },
        "This Is My span_5 Element"
      ),
      React.createElement(
        "span",
        { id: "span_6", key: "span_60" },
        "This Is My span_6 Element"
      ),
    ]),
  ])
);

// STEP 2 :- create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// STEP 3 :- render root
root.render(heading);
