import React from "react";
import TechRadar from "../tech-radar/TechRadar";
import {Container} from "../../components/layout/Container";

function App() {
  return (
      <Container>
        <TechRadar/>
      </Container>
  );
}

export default App;

export const AppRoute = {
  component: App,
  url: '/',
}
