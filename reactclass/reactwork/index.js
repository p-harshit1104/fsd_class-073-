// let p = document.getElementsByClassName("cont");
// const h1 = document.createElement("h1");
// h1.innerText = "Hello JS";
// p[0].appendChild(h1);
// console.log(h1);

const p = document.getElementById("root");
console.dir(p);
const root = ReactDOM.createRoot(p);
// const h1 = React.createElement(
//   "h1",
//   { style: { color: "red" } },
//   "hello react js"
// );
// const li1 = React.createElement("li1", {}, "Apple ");
// const li2 = React.createElement("li2", {}, "Orange");
// const ul = React.createElement("ul", {}, li1, li2);
// const div = React.createElement(
//   "div",
//   { style: { backgroundColor: "cyan" } },
//   h1,
//   ul
// );

//JSX
const h2 = React.createElement("h2", {}, "Starting tag");
const h21 = <h2>Hello JSX in JS</h2>;
const li1 = <li>Orange</li>;
const li2 = <li>Pineapple</li>;
const li3 = <li>Banana</li>;
const li4 = <li>Apple</li>;
const ul = (
  <ul style={{ color: "red" }}>
    {li1}
    {li2}
    {li3}
    {li4}
  </ul>
);
const container = (
  <div>
    <div>{ul}</div>
    <div>{h21}</div>
  </div>
);
root.render(container);
