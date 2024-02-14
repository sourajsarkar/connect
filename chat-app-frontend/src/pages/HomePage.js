import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        textAlign="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0px 15px 0px"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work Sans" fontWeight="900">
          Harsh-Chat-App
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        textAlign="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0px 15px 0px"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" color="black">
          <TabList mb="1em">
            <Tab w="50%">Login</Tab>
            <Tab w="50%">Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
