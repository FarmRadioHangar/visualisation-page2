import React, { useContext } from "react";
import {
  Img,
  Link,
  Box,
  Text,
  Heading,
  Container,
  Stack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import photo4 from "../img/Feature4.jpg";

import { AppContext } from "../contexts/App";
import { Trans, useTranslation } from "react-i18next";
import Header from "./Header2";
import { MdCheckCircle, MdMessage } from 'react-icons/md';
import hero from "../img/Hero.jpg"

function About() {
  const { setAboutPageVisible } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <>
      <Box bg={`linear-gradient(0deg, rgb(76 159 56 / 75%), rgb(76 159 56 / 12%)),url(${hero})`} 
            backgroundSize="cover"
            backgroundPosition="center top"
      >
        <Container maxW={"8xl"} zIndex={10} position={"relative"}>
          <Header bg={"transparent"}/>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 10, xl: 20 }}
            >
              <Box id="insights">
                <Heading
                  color={"white"}
                  mb={5}
                  fontSize={{ base: "3xl", md: "70px" }}
                  fontFamily="BebasR"
                  textTransform={"uppercase"}
                >
                  {t("About the project")}
                </Heading>
                <Text
                  fontFamily={"heading"}
                  fontWeight={300}
                  mb={3}
                  fontSize={"2xl"}
                  color={"white"}
                >
                  {t("ABOUT_P_1")}
                </Text>
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  mb={3}
                  fontSize={"2xl"}
                  color={"white"}
                >
                  {t("ABOUT_P_2")}
                </Text>
                <Text
                  fontFamily={"heading"}
                  fontWeight={300}
                  mb={3}
                  fontSize={"2xl"}
                  color={"white"}
                >
                  {t("ABOUT_P_2i")}
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container maxW={"7xl"} zIndex={10} mt={8} py={10}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack m={8}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Img
                  src={photo4}
                  width="350px"
                  height="450px"
                  borderRadius="5px"
                  objectFit="cover"
                />
              </Box>
            </Stack>
            <Stack flex={1} justifyContent="center">
              
              <Box>
                <Heading mb={7} fontSize={"5xl"} fontFamily="BebasR" textTransform={"uppercase"}>
                  {t("Reaching rural people")}
                </Heading>
                {/* <Text mb={4}>{t("ABOUT_P_3")}</Text> */}
                <Text fontFamily={"heading"} fontSize={"xl"} fontWeight={300} mb={4}>{t("ABOUT_P_4")}</Text>
                <Text fontFamily={"heading"} fontSize={"xl"} fontWeight={300} mb={4}>{t("ABOUT_P_5")}</Text>
                <Text mb={3} fontWeight="bold">
                  <Trans i18nKey="ABOUT_P_6">
                    To read the full results,&nbsp;
                    <Link
                      color="#01aed9"
                      onClick={() => {
                        setAboutPageVisible(false);
                      }}
                      href="#report"
                    >
                      download the report here
                    </Link>
                    .&nbsp;
                  </Trans>
                  
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bg="#edf2f7" py={20} my={10}>
        <Container maxW={"7xl"} zIndex={10}>
          <Heading mb={7} fontSize={"5xl"} fontFamily="BebasR" textTransform={"uppercase"}>
            {t("How it works - Listener polling")}
          </Heading>
          <Text fontFamily={"heading"} fontSize={"2xl"} fontWeight={300} mb={10}>
            <Trans i18nKey="ABOUT_P_8">
              Each episode of the On Air Dialogues posed a series of questions to listeners.

                <List spacing={3} mt={5} listStylePosition="inside">
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      As advertised on the radio program, listeners can use any mobile phone to leave a missed call (or “beep”) on a number advertised on the radio program.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Uliza, Farm Radio’s polling tool, returns the call, free of charge.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Uliza presents the caller with a series of multiple-choice questions. Callers respond by pressing numbers on the keypad.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Uliza presents the caller with an open-ended question. Callers record a voice message in response.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Responses to multiple-choice questions are analyzed and disaggregated to shed light on key themes by country, age, and gender. Voice messages are similarly analyzed and documented.
                    </ListItem>
                    
                </List>
            </Trans>
          </Text>
          
        </Container>
      </Box>
      <Box>
        <Container maxW={"7xl"} zIndex={10} py={10} mb={10}>
          <Box>
            <Heading fontSize={"5xl"} fontFamily="BebasR" mb={7} textTransform={"uppercase"}>
              {t("Acknowledgements")}
            </Heading>
            <Heading size="lg" mb={2} fontFamily="BebasB">
              {t("Farm Radio International")}
            </Heading>
            <Text fontFamily={"heading"} fontSize={"xl"} fontWeight={300} mb={10}>{t("ABOUT_P_10")}</Text>
            <Heading size="lg" fontFamily="BebasB" mb={2}>
              {t("International Fund for Agriculture Development")}
            </Heading>
            <Text fontFamily={"heading"} fontSize={"xl"} fontWeight={300} mb={10}>{t("ABOUT_P_11")}</Text>
            
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default About;
