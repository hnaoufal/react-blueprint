import React, { useEffect } from "react";
import { Container } from "../../components/layout/Container";
import { TechRadar } from "../../components/TechRadar/TechRadar";
import { useSelector, useDispatch } from "react-redux";
import { entriesList, getEntries } from "../../features/entries/entriesSlice";
import { configObject, getConfig } from "../../features/config/configSlice";
import { entries2 } from "../../components/TechRadar/config2";

// quadrant: number,
// ring: number,
// label: string,
// active: boolean,

// const mapper = 

const mapper = (config: any, entries: any) => {
  const quadrantIndex = ;
  const ringIndex = ;

  return entries.map((entry: any) => ({
    label: entry.Techonolgy,
    quadrant: ,
    ring: ,
    active: false,
    moved: 0,
    link: ''
  }));
}

function App() {
  const entries = useSelector(entriesList) as any;
  const config = useSelector(configObject) as any;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig());
    dispatch(getEntries());
  }, []);

  return (
    <Container>
      <TechRadar config={{ ...config, entries: mapper(config, entries2) }} />
    </Container>
  );
}

export default App;

export const AppRoute = {
  component: App,
  url: '/',
}
