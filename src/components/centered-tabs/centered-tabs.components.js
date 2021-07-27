import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: "left",
    justifyContent: "center",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Client" {...a11yProps(0)} />
        <Tab label="Lawyer" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        Are you looking for a solution to your judirical case? By registering as
        a client:
        <ul>
          <li>
            You can select a specialization and Enquiry your case to
            professional Lawyers
          </li>
          <li>Specialist Lawyers registered in the app will contact you</li>
          <li>Make a deal and solve your case</li>
          <li>Rate our Lawyers and help us to improve our service</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Are you looking for professional exposure? By registering as a Lawyer:
        <ul>
          <li>
            You can register your specialization and receive cases from our
            Clients
          </li>
          <li>Consult your cases</li>
          <li>Solve cases and gain professional exposure</li>
        </ul>
      </TabPanel>
    </Paper>
  );
}
