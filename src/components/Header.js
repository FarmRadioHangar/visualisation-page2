import React, { useState, useContext } from "react";
import {
  Img,
  Link,
  Button,
  Spacer,
  Stack,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import logo from "../img/on-air-dialogues.svg";
import logoAlt from "../img/on-air-dialogues-white.svg";
import { AppContext } from "../contexts/App";

function MenuItem({ children, isLast, to = "/", ...props }) {
  return (
    <Link href={to}>
      <Text display="block" mx={1} {...props}>
        {children}
      </Text>
    </Link>
  );
}

function MenuLinks({ isOpen }) {
  //const { language, setLanguage } = useContext(AppContext);
  const { setAboutPageVisible } = useContext(AppContext);

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={6}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Spacer display={{ base: "none", sm: "block" }} />
        <MenuItem
          onClick={() => {
            setAboutPageVisible(true);
          }}
          color={{ lg: "#4c9f38", md: "#4c9f38", sm: "white" }}
          to="#about"
        >
          About the project
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAboutPageVisible(false);
          }}
          color={{ lg: "#4c9f38", md: "#4c9f38", sm: "white" }}
          to="#insights"
        >
          Insights
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAboutPageVisible(false);
          }}
          color={{ lg: "#4c9f38", md: "#4c9f38", sm: "white" }}
          to="#results"
        >
          Explore the results
        </MenuItem>
        {/*
        <Select
          color={{ base: "#dfa400", md: "#4c9f38" }}
          borderColor={{ base: "#dfa400", md: "#4c9f3880" }}
          bg={{ sm: "white" }}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
          value={language}
          size="md"
          w={{ base: "100%", sm: "140px" }}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ki">Swahili</option>
        </Select>
        <Link w={{ base: "100%", sm: "auto" }} href="/donate">
          <Button
            size="md"
            rounded="md"
            color={"white"}
            bg={"#4c9f38"}
            _hover={{
              bg: "#4c9f38",
            }}
            w={{ base: "100%", sm: "auto" }}
          >
            Donate!
          </Button>
        </Link>
        */}
        <Link
          w={{ base: "100%", sm: "auto" }}
          href="#report"
          onClick={() => {
            setAboutPageVisible(false);
          }}
          _hover={{ textDecoration: "none" }}
        >
          <Button
            size="md"
            rounded="md"
            color={"white"}
            bg={"#4c9f38"}
            _hover={{
              bg: "#4c9f38",
            }}
            w={{ base: "100%", sm: "auto" }}
          >
            Download the report!
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

function CloseIcon() {
  return (
    <svg
      cursor="pointer"
      width="24"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Close</title>
      <path
        fill="white"
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      cursor="pointer"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
}

function MenuToggle({ toggle, isOpen }) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
}

function NavBarContainer({ children, ...props }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={0}
      p={8}
      bg={["#dfa400", "#dfa400", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
}

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <NavBarContainer {...props}>
      <Box cursor="pointer">
        <Box display={["flex", "flex", "none", "none"]}>
          <Img src={logoAlt} w={90} />
        </Box>
        <Box display={["none", "none", "flex", "flex"]}>
          <a href="/">
            <Img src={logo} w={120} />
          </a>
        </Box>
      </Box>
      <MenuToggle toggle={toggleMenu} isOpen={menuOpen} />
      <MenuLinks isOpen={menuOpen} />
    </NavBarContainer>
  );
}

export default Header;
