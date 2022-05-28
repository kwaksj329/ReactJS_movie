import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { Chip } from "@mui/material";

function List({ list, onRemove }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <Checkbox {...label} />
      <Chip
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
      {lists.map((list, index) => {
        return <List list={list} key={list.id} onRemove={onRemove}></List>;
      })}
    </div>
  );
}

export default Todolist;
