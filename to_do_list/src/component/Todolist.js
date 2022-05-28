import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { Chip } from "@mui/material";

function List({ list, mykey, onRemove }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [checked, setChecked] = React.useState([]);
  const handleChange = (event) => {
    const isChecked = event.currentTarget.checked;
    const name = event.target.name;
    if (isChecked) {
      setChecked([...checked, name]);
    } else {
      setChecked(checked.filter((e) => e !== name));
    }
    console.log(event.index);
  };
  return (
    <div>
      <Checkbox
        key={mykey}
        onChange={handleChange}
        checked={list.checked}
        {...label}
      />
      <Chip
        key={mykey}
        label={list}
        onDelete={() => {
          onRemove(list);
        }}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      ></Chip>
    </div>
  );
}

function Todolist({ lists, onRemove }) {
  return (
    <div>
      {lists.map((list) => {
        return <List list={list} key={list} onRemove={onRemove}></List>;
      })}
    </div>
  );
}

export default Todolist;
