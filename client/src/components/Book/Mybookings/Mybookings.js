import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Active from './Active';
import Past from './Past';
import { useNavigate } from 'react-router-dom';

const Mybookings=({user})=>{
const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:'70%',margin:"10px auto"}
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
          <Box>
            <Typography component="span">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  let navigate = useNavigate()

  console.log(user);
  useEffect(()=>{
    if(user == null){
      navigate('/auth')
    }
  }, [user])

  
    return (
        <section>
         <h2 className='text-center'>My Bookings</h2>
        <Paper elevation={20} style={paperStyle}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
            // variant="fullWidth"
            centered
          >
            <Tab label="Active"/>          
            <Tab label="Past" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Active handleChange={handleChange}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Past/>
          </TabPanel>
      </Paper>
      {/* <Reviews/>      */}
      </section>
      
    )
}

export default Mybookings;