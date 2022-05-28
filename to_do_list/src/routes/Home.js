import * as React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Header from "../component/Header";
import Divider from "@mui/material/Divider";

const Home = () => {
  return (
    <div>
      <Header />
      <Stack
        spacing={3}
        direction="column"
        alignItems="stretch"
        justifyContent="center"
        margin={"30px"}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Link to="/school">
          <Button variant="outlined" fullWidth>
            SCHOOL📚
          </Button>
        </Link>
        <Link to="/soma">
          <Button variant="outlined" fullWidth>
            SOMA👾
          </Button>
        </Link>
        <Link to="/personal">
          <Button variant="outlined" fullWidth>
            PERSONAL😎
          </Button>
        </Link>
      </Stack>
    </div>
  );
};
export default Home;
