import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Header from "../component/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Stack spacing={2} direction="column">
        <Button variant="outlined">SCHOOL📚</Button>
        <Button variant="outlined">SOMA👾</Button>
        <Button variant="outlined">PERSONAL😎</Button>
      </Stack>
    </div>
  );
};
export default Home;
