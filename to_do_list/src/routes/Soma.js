import Header from "../component/Header";
import Contents from "../component/Contents";
import Sidebar from "../component/Sidebar";
import React from "react";

function Soma() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Contents title={"Soma TODOLIST 👾"} />
    </div>
  );
}

export default Soma;
