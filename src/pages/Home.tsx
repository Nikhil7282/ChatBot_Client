import { Box } from "@mui/material";
import React from "react";
import Typing from "../components/typer/Typing";

const Home = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Typing />
      </Box>
    </Box>
  );
};

export default Home;
