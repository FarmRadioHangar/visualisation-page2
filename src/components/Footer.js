import React from "react";
import {
  Grid,
  GridItem,
  Text,
  Img,
  SimpleGrid,
  Link,
  Box,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import ifadLogo from "../img/ifad-logo.svg";
import farmRadioLogo from "../img/logo-farm-radio-international.png";
import wvLogo from "../img/wv-logo.jpg";
import logo from "../img/UNfoodSystemsLogos-300x134-1.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

//function SocialButton({ children, label, href }) {
//  return (
//    <Button
//      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
//      rounded={"full"}
//      w={10}
//      h={10}
//      p={0}
//      cursor={"pointer"}
//      as={"a"}
//      href={href}
//      display={"inline-flex"}
//      alignItems={"center"}
//      justifyContent={"center"}
//      transition={"background 0.3s ease"}
//      _hover={{
//        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
//      }}
//    >
//      <VisuallyHidden>{label}</VisuallyHidden>
//      {children}
//    </Button>
//  );
//}

//function ListHeader({ children }) {
//  return (
//    <Text color="primary.500" fontWeight={"500"} fontSize={"lg"} mb={2}>
//      {children}
//    </Text>
//  );
//}

function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
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
                  <Link
                    isExternal
                    href="https://www.un.org/en/food-systems-summit"
                  >
                    <Img src={logo} />
                  </Link>
                </Box>
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Link isExternal href="https://farmradio.org">
                    <Img src={farmRadioLogo} />
                  </Link>
                </Box>
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Link isExternal href="https://www.ifad.org">
                    <Img src={ifadLogo} w="100%" />
                  </Link>
                </Box>
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Link isExternal href="https://www.worldvision.ca">
                    <Img src={wvLogo} style={{ mixBlendMode: "multiply" }} />
                  </Link>
                </Box>
              </SimpleGrid>
            </Box>
            <Text fontSize={"xs"}>© 2021 All rights reserved</Text>
          </GridItem>
          <GridItem pb={8} d="flex" alignItems="center">
            <Stack align={"flex-center"}>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <ExternalLinkIcon mx="2px" />
                <Link
                  isExternal
                  href="https://cooperation.ca/what-we-do/canadian-food-security-policy-group/"
                >
                  {t('Canadian Food Security Policy Group')}
                </Link>
              </Stack>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <ExternalLinkIcon mx="2px" />
                <Link isExternal href="https://sdgs.un.org/">
                  {t('UN Sustainable Development Goals')}
                </Link>
              </Stack>
              {/*
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
              */}
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
