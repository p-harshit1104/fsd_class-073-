import React from "react";
import Student from "./Student";

function App() {
  let a = 69;
  const mystyle = {
    backgroundColor: "red",
    color: "white",
  };
  return (
    <div style={mystyle}>
      ABES
      <div style={mystyle}>{a}</div>
      <div style={{ backgroundColor: "cyan" }}>
        <Student
          college="ABES Engineering College"
          name="Nitin Keshari"
          roll="2200320100111"
          branch="CSE"
          section="A"
          admission="2022b0101174"
        />
      </div>
    </div>
  );
}

export default App;
