import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Componentts and Containers
import { Container } from "../../components/layout/Container";
import { TechRadar } from "../../components/TechRadar/TechRadar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Fetch data
import { config1Object, getConfig1Action } from "../../features/config1/config1Slice";
import { config2Object, getConfig2Action } from "../../features/config2/config2Slice";
import { config3Object, getConfig3Action } from "../../features/config3/config3Slice";
import { config4Object, getConfig4Action } from "../../features/config4/config4Slice";

function a11yProps(index: number) {
  return {
    id: `bosch-tabs-${index}`,
    'aria-controls': `bosch-tabs-${index}`,
  };
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`bosch-tabs-${index}`}
      aria-labelledby={`bosch-tabs-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function App() {
  const config1 = useSelector(config1Object) as any;
  const config2 = useSelector(config2Object) as any;
  const config3 = useSelector(config3Object) as any;
  const config4 = useSelector(config4Object) as any;

  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(getConfig1Action());
    dispatch(getConfig2Action());
    dispatch(getConfig3Action());
    dispatch(getConfig4Action());
  }, [config1, config2, config3, config4, dispatch]);

  return (
    <Container>
      <Tabs value={value} onChange={(e: any, newValue: number) => setValue(newValue)} aria-label="bosch-tabs">
        <Tab label="Developers" {...a11yProps(0)} />
        <Tab label="Architectures" {...a11yProps(1)} />
        <Tab label="Sales" {...a11yProps(2)} />
        <Tab label="Marketing" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TechRadar config={config1} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TechRadar config={config2} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TechRadar config={config3} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TechRadar config={config4} />
      </TabPanel>
    </Container>
  );
}

export default App;

export const AppRoute = {
  component: App,
  url: '/',
}
