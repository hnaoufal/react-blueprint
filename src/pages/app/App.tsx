import React, { useEffect } from "react";
import { Container } from "../../components/layout/Container";
import { TechRadar } from "../../components/TechRadar/TechRadar";
import { useSelector, useDispatch } from "react-redux";
import { entriesList, getEntries } from "../../features/entries/entriesSlice";
import { configObject, getConfig } from "../../features/config/configSlice";




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
      <TechRadar config={{ ...config, entries: entries.map((a: any) => ({ ...a })) }} />
    </Container>
  );
}

export default App;

export const AppRoute = {
  component: App,
  url: '/',
}
