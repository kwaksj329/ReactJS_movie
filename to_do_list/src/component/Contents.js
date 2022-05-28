import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const Contents = ({ title }) => {
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

  const handleRemove = (id) => {
    setToDos((toDos) => toDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <Box
      sx={{
        p: 3,
        position: "absolute",
        marginLeft: "5px",
        marginTop: "30px",
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
        </form>
        <hr />
        <ul>
          {toDos.map((item, index) => (
            <FormGroup row={true}>
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={item}
              />
              <DeleteIcon
                key={item}
                focusable="true"
                display="flex"
                justify-content="center"
                alignItems="center"
                onClick={() => handleRemove(item.id)}
              />
            </FormGroup>
          ))}
        </ul>
      </div>
    </Box>
  );
};

export default Contents;
