import Tabs from "@mui/material/Tabs";
import LinkTab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useState } from "react";

const Sidebar = (onPageSelect) => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <div>
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
          onChange={() => handleChange(value)}
          orientation="vertical"
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <LinkTab value="one" label="School" href="/school" />
          <LinkTab value="two" label="SWM" href="/soma" />
          <LinkTab value="three" label="Personal" href="/personal" />
        </Tabs>
      </Box>
    </div>
  );
};

export default Sidebar;
