import Header from "../component/Header";
import Contents from "../component/Contents";
import Sidebar from "../component/Sidebar";
import React from "react";

function School() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Contents title={"School TODOLIST 📚"} />
    </div>
  );
}

export default School;
