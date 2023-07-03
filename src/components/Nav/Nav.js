import React from "react";
import Intro from "../AboutMe/aboutme";
import Portofolio from "../Portofolio/portofolio"
import { Grid, Box, Tab, Tabs } from 'grommet';
import { Contact, Emoji, Projects } from 'grommet-icons';

const NavSection= () => (
 
  <Box align="center" background="focus">
    <Tabs>
      <Tab title="About Me" icon={<Emoji />}>
        <Intro/>
      </Tab>
      <Tab title="Portofolio" icon={<Projects />}>
        
        <Grid ><Portofolio/></Grid>
      </Tab>
      <Tab title="Contact Me" icon={<Contact />}>
        <Box margin="small">Coming Soon</Box>
      </Tab>
    </Tabs>
  </Box>
  
);



export default NavSection