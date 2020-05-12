import React from "react";
import { Container } from "../../components/layout/Container";
import { TechRadar } from "../../components/TechRadar/TechRadar";
import { config } from '../../components/TechRadar/config';




function App() {
  return (
    <Container>
      <TechRadar config={config} entries={[]} />
    </Container>
  );
}

export default App;

export const AppRoute = {
  component: App,
  url: '/',
}
