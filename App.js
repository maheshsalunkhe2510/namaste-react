import React from "react";
import ReactDOM from "react-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }), [
        React.createElement("h1", { id: "heading" }, "I  smh1 tag test"),
        React.createElement("h2", { id: "heading" }, "I smh1 tag")], React.createElement("div", { id: "child1" }), [
        React.createElement("h1", { id: "heading" }, "I smh1 tag1"),
        React.createElement("h2", { id: "heading" }, "I smh1 tag2")]]);
root.render(parent);