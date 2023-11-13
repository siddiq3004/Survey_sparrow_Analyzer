import React from "react";
import { Input,Flex,Box, Heading, Text, Button } from "@sparrowengg/twigs-react";
import { Drawer, DrawerHeader, DrawerFooter, DrawerBody } from "@sparrowengg/twigs-react";
function Dra() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    return (
      <>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <DrawerHeader>
            <Heading size="h4">Summarized Content</Heading>
          </DrawerHeader>
          <DrawerBody>
            Content From ChatGPT.......
          </DrawerBody>
          <DrawerFooter>
            <Button>Download It !!</Button>
          </DrawerFooter>
        </Drawer>
        <Button className="dra" onClick={() => setIsDrawerOpen(true)}>
          Summarized Content
        </Button>
      </>
    );
  }
export default Dra