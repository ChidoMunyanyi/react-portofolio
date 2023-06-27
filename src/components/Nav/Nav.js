import React from "react";
import Intro from "../AboutMe/aboutme";
import { Box, Tab, Tabs } from 'grommet';
import { Contact, Emoji, Projects } from 'grommet-icons';

const NavSection= () => (
 
  <Box align="center" background="focus">
    <Tabs>
      <Tab title="About Me" icon={<Emoji />}>
        <Intro/>
      </Tab>
      <Tab title="Portofolio" icon={<Projects />}>
        <Box margin="small">Coming Soon</Box>
      </Tab>
      <Tab title="Contact Me" icon={<Contact />}>
        <Box margin="small">Coming Soon</Box>
      </Tab>
    </Tabs>
  </Box>
  
);



export default NavSection