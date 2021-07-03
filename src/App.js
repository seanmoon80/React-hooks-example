import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { UseStateExample, UseStateInfo } from './components/useStateExample';
import { 
  UseBasicEffectInfo,
  UseMountEffectInfo,
  UseStateEffectInfo,
  UseCleanUpEffectInfo,
  UseUnmountEffectInfo
} from './components/useEffectExample';
import { UseReducerCounter, UseReducerInfo } from './components/useReducerExample';
import { UseMemoAverage } from './components/useMemoExample';
import { UseCallbackAverage } from './components/useCallbackExample';
import { UseRefDom, UseRefVariable } from './components/useRefExample';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Hooks Examples"
        className={classes.tabs}
      >
          <Tab label="useState Counter" {...a11yProps(0)} />
          <Tab label="useState Info" {...a11yProps(1)} />
          <Tab label="useEffect" {...a11yProps(2)} />
          <Tab label="useEffect Mount" {...a11yProps(3)} />
          <Tab label="useEffect Variable" {...a11yProps(4)} />
          <Tab label="useEffect Clean Up" {...a11yProps(5)} />
          <Tab label="useEffect Clean Up Unmount" {...a11yProps(6)} />
          <Tab label="useReducer Counter" {...a11yProps(7)} />
          <Tab label="useReducer Info" {...a11yProps(8)} />
          <Tab label="useMemo Average" {...a11yProps(9)} />
          <Tab label="useCallback Average" {...a11yProps(10)} />
          <Tab label="useRef DOM Access" {...a11yProps(11)} />
          <Tab label="useRef Variable" {...a11yProps(12)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <UseStateExample />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UseStateInfo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UseBasicEffectInfo />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UseMountEffectInfo />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <UseStateEffectInfo />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <UseCleanUpEffectInfo />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <UseUnmountEffectInfo />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <UseReducerCounter />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <UseReducerInfo />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <UseMemoAverage />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <UseCallbackAverage />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <UseRefDom />
      </TabPanel>
      <TabPanel value={value} index={12}>
        <UseRefVariable />
      </TabPanel>
    </div>
  );
}

export default App;
