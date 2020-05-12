import React, { useEffect } from "react";
import { Container } from "../../components/layout/Container";
import { TechRadar } from "../../components/TechRadar/TechRadar";
import { useSelector, useDispatch } from "react-redux";
import { entriesList, getEntries } from "../../features/entries/entriesSlice";
import { configObject, getConfig } from "../../features/config/configSlice";
import { entries2 } from "../../components/TechRadar/config2";

// remove
const mapper = (entries: any) => {
  const qu = [
    "Language",
    "Infrastructure",
    "Framework",
    "Data Management"
  ];

  const r = [
    "Adopt",
    "Assess/Trial",
    "Hold",]

  const test = entries.map((entry: any) => ({
    quadrant: qu.indexOf(entry['Quadrant']),
    ring: r.indexOf(entry.Ring),
    label: entry['Technology'],
    active: false,
    link: '',
    moved: 0
  }));

  return test;
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
      <TechRadar config={{ ...config, entries: mapper(entries2) }} />
    </Container>
  );
}

export default App;

export const AppRoute = {
  component: App,
  url: '/',
}

// <TechRadar config={{ ...config, entries: mapper(entries2) }} />
// <TechRadar config={{ ...config, entries: entries.map((a: any) => ({ ...a, active: 0, link: '', moved: 0})) }} />