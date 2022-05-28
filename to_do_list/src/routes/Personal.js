import Header from "../component/Header";
import Contents from "../component/Contents";
import Sidebar from "../component/Sidebar";
import React from "react";

function Personal() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Contents title={"Personal TODOLIST 😎"} />
    </div>
  );
}

export default Personal;
