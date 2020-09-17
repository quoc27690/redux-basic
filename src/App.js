import React from "react";
import "./scss/styles.scss";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Menu />
        <Main />
      </div>
    </div>
  );
}

export default App;
