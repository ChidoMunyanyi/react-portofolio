import React from "react";

import { Box, Tab, Tabs } from 'grommet';
import { Contact, Emoji, Projects } from 'grommet-icons';

const TabsWithIcons = () => (
  // Uncomment <Grommet> lines when using outside of storybook
  // <Grommet theme={...}>
  <Box align="center" pad="medium">
    <Tabs>
      <Tab title="About Me" icon={<Emoji />}>
        <Box margin="small">General Information</Box>
      </Tab>
      <Tab title="Portofolio" icon={<Projects />}>
        <Box margin="small">Account Information</Box>
      </Tab>
      <Tab title="Contact Me" icon={<Contact />}>
        <Box margin="small">Billing Information</Box>
      </Tab>
    </Tabs>
  </Box>
  // </Grommet>
);



export default TabsWithIcons