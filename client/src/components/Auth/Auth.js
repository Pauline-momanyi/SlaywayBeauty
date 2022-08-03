import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Login from "./Login";
import Signup from "./Signup";


function Auth({ onLogin, user }){
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate

  const paperStyle = { width: "90%", margin: "20px auto", padding: "8px" };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    useEffect(() => {
      if(user){
        navigate('/api/book')
      }
    }, []);

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component="span">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    // <div style={{width: '50%', margin: 'auto'}}>
    <Paper elevation={20} style={paperStyle}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        // aria-label="disabled tabs example"
        centered
      >
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange} onLogin={onLogin} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup onLogin={onLogin} />
      </TabPanel>
    </Paper>
    // </div>
  );
};

export default Auth;
