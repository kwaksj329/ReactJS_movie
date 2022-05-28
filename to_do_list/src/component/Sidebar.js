import Tabs from "@mui/material/Tabs";
import LinkTab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

const Sidebar = () => {
  const [value, setValue] = useState("School");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        position: "fixed",
        top: "80px",
        margin: "30px 10px 10px 30px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        orientation="vertical"
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <LinkTab label="School" href="/school" />
        <LinkTab label="SWM" href="/soma" />
        <LinkTab label="Personal" href="/personal" />
      </Tabs>
    </Box>
  );
};

export default Sidebar;
