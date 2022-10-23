import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../src/components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import EmojiDetails from "../src/components/EmojiDetails/EmojiDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Container fixed>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Navigate to="/emojis" />}></Route>
          <Route path="/emojis" exact element={<Home />}></Route>
          <Route path="/emojis/search" exact element={<Home />}></Route>
          {/* <Route path="/emojis/:id" exact element={<EmojiDetails />}></Route> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
