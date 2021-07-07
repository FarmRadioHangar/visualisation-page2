import React from "react";
import {
  Button,
  VisuallyHidden,
  Grid,
  GridItem,
  Text,
  Tag,
  Img,
  SimpleGrid,
  Link,
  Box,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import ifadLogo from "../img/ifad-logo.svg";
import farmRadioLogo from "../img/logo-farm-radio-international.png";
import wvLogo from "../img/wv-logo.jpg";
import logo from "../img/UNfoodSystemsLogos-300x134-1.png";

function SocialButton({ children, label, href }) {
  return (
    <Button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={10}
      h={10}
      p={0}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
}

function ListHeader({ children }) {
  return (
    <Text color="primary.500" fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
}

function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Grid templateColumns={{ sm: "1fr 1fr", md: "3fr 1fr" }} spacing={8}>
          <GridItem spacing={6} pb={8} colSpan={{ sm: 2, md: 1 }}>
            <Box mb={10}>
              <SimpleGrid
                columns={{ sm: 2, lg: 4 }}
                spacing="20px"
                mr={[0, null, 10]}
              >
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Img src={logo} />
                </Box>
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Img src={farmRadioLogo} />
                </Box>
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Img src={ifadLogo} />
                </Box>
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Img src={wvLogo} style={{ mixBlendMode: "multiply" }} />
                </Box>
              </SimpleGrid>
            </Box>
            <Stack direction={"row"} spacing={3} py={4}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
            <Text fontSize={"xs"}>© 2021 All rights reserved</Text>
          </GridItem>
          <GridItem pb={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Food systems</ListHeader>
              <Link href={"#"}>Sustainable Development Goals</Link>
              <Link href={"#"}>The value chain</Link>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Link href={"#"}>Learning resources</Link>
                <Tag
                  size={"sm"}
                  bg={useColorModeValue("green.300", "green.800")}
                  ml={2}
                  color={"white"}
                >
                  New
                </Tag>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
