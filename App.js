
const   = ReactDOM.createRoot(document.getElementById("root"));
const parrent = React.createElement("div", { id: "parrent" },
    [React.createElement("div", { id: "child" }), [
        React.createElement("h1", { id: "heading" }, "I smh1 tag"),
        React.createElement("h2", { id: "heading" }, "I smh1 tag")], React.createElement("div", { id: "child1" }), [
        React.createElement("h1", { id: "heading" }, "I smh1 tag1"),
        React.createElement("h2", { id: "heading" }, "I smh1 tag2")]]);
root.render(parrent);