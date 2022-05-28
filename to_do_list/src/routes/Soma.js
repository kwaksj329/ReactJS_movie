import Header from "../component/Header";
import Contents from "../component/Contents";
import Sidebar from "../component/Sidebar";

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
