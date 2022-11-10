import React, { useContext } from "react";
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
import fidaFr from "../img/fida_fr.png";
import farmRadioLogo from "../img/FRI_logo_BI.png";
import farmRadioLogoFr from "../img/FRI_fr.png";
import wvLogo from "../img/wv-logo.jpg";
import wvLogoFr from "../img/wv-mondiale-logo.png";
import logo from "../img/UNfoodSystemsLogos-300x134-1.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AppContext } from "../contexts/App";
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
  const { language } = useContext(AppContext);

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
              <SimpleGrid
                columns={{ sm: 2, lg: 3 }}
                spacing="0px"
                // mr={[0, null, 10]}
                alignItems={"center"}
              >
                <Box>

                  <SimpleGrid
                    columns={{ sm: 1, lg: 2 }}
                    spacing="10px"
                    mr={[0, null, 10]}
                    alignItems={"center"}
                  >
                    <Box
                      maxWidth={100}
                      // display="flex"
                      alignItems="left"
                      justifyContent="left"
                      p={0}
                    >
                      <Link isExternal href="https://www.ifad.org">
                        <Img src={'fr' === language ? fidaFr : ifadLogo} style={{ width: '300px' }} />
                      </Link>
                    </Box>

                    <Box
                      maxWidth={400}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      pt={3}
                    >
                      <Link isExternal href="https://farmradio.org">
                        <Img src={'fr' === language ? farmRadioLogo : farmRadioLogo} />
                      </Link>
                    </Box>

                  </SimpleGrid>

                </Box>
                
                
              </SimpleGrid>
        <Text fontSize={"xs"} pt={5}>© 2022 All rights reserved</Text>
      </Container>
    </Box>
  );
}

export default Footer;
