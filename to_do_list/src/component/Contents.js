import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Todolist from "./Todolist";

const Contents = ({ title }) => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const onRemove = (id) => {
    setToDos((toDos) => toDos.filter((todo) => todo !== id));
  };

  const onRemoveAll = (id) => {
    setToDos([]);
  };

  return (
    <Box
      sx={{
        p: 3,
        margin: "30px 0px 0px 0px",
        padding: "0px 0px 0px 0px",
        display: "flex",
        width: "85vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>
          {title}({toDos.length})
        </h1>
        <form onSubmit={onSubmit}>
          <TextField
            onChange={onChange}
            value={toDo}
            type="text"
            id="standard-basic"
            label="text todo"
            variant="standard"
          />
          <Button variant="outlined" type="submit">
            ADD
          </Button>
          <Button variant="outlined" onClick={onRemoveAll}>
            DELETE ALL
          </Button>
        </form>
        <hr />
        <ul>
          <Todolist lists={toDos} onRemove={onRemove} />
        </ul>
      </div>
    </Box>
  );
};

export default Contents;
