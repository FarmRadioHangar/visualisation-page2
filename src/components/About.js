import React, { useContext } from "react";
import {
  Img,
  Link,
  Box,
  Text,
  Heading,
  Container,
  Stack,
} from "@chakra-ui/react";
import photo4 from "../img/photo4.jpg";
import { AppContext } from "../contexts/App";
import { Trans, useTranslation } from "react-i18next";

function About() {
  const { setAboutPageVisible } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <>
      <Box bg="#dfa400">
        <Container maxW={"7xl"} zIndex={10} position={"relative"}>
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
                  fontSize={{ base: "3xl", md: "5xl" }}
                >
                  {t('About the project')}
                </Heading>
                <Text
                  fontFamily={"heading"}
                  fontWeight={300}
                  mb={3}
                  fontSize={"2xl"}
                  color={"white"}
                >
                  {t('ABOUT_P_1')}
                </Text>
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  mb={3}
                  fontSize={"2xl"}
                  color={"white"}
                >
                  {t('ABOUT_P_2')}
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container maxW={"7xl"} zIndex={10} mt={8}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack m={8}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Img
                  src={photo4}
                  width="350px"
                  height="350px"
                  borderRadius="50%"
                  objectFit="cover"
                />
              </Box>
            </Stack>
            <Stack flex={1} justifyContent="center">
              <Box>
                <Text mb={4}>
                  {t('ABOUT_P_3')}
                </Text>
                <Text mb={4}>
                  {t('ABOUT_P_4')}
                </Text>
                <Text mb={4}>
                  {t('ABOUT_P_5')}
                </Text>
                <Text mb={3} fontWeight="bold">
                  <Trans i18nKey="ABOUT_P_6">
                    To read the full results,&nbsp;
                    <Link color="#01aed9" onClick={() => { setAboutPageVisible(false); }} href="#report">
                      download the report here
                    </Link>.&nbsp; 
                  </Trans>
                  <Trans i18nKey="ABOUT_P_7">
                    Or,&nbsp;
                    <Link color="#01aed9" onClick={() => { setAboutPageVisible(false); }} href="#results">
                      click here
                    </Link>{" "}
                    to explore the results, and listen to the voices of farmers.{" "}
                    <b>The report is coming soon!</b>
                  </Trans>
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bg="#edf2f7" py={20} my={10}>
        <Container maxW={"7xl"} zIndex={10}>
          <Heading mb={4} size="lg">
            {t('The 2021 UN Food Systems Summit')}
          </Heading>
          <Text mb={3}>
            <Trans i18nKey="ABOUT_P_8">
              This project takes place within the framework of the{" "}
              <Link
                isExternal
                color="#01aed9"
                href="https://www.un.org/en/food-systems-summit"
              >
                2021 UN Food Systems Summit
              </Link>. 
              Convened in 2021 by UN Secretary-General António Guterres, the UN
              Food Systems Summit brings together global actors from across
              sectors to engage in dialogue on all aspects of food systems. The
              aim of the Summit is to create tangible, positive food system
              transformation through the Sustainable Development Goals (SDGs).
            </Trans>
          </Text>
          <Box py={8} px={12} bg="#4c9f38" ml={60} my={10}>
            <Text mb={3} fontSize="2xl" color="white">
              {t('ABOUT_P_9')}
            </Text>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxW={"7xl"} zIndex={10} py={10} mb={10}>
          <Box>
            <Heading size="lg" mb={4}>
              {t('Acknowledgements')}
            </Heading>
            <Heading size="sm" mb={2}>
              {t('Farm Radio International')}
            </Heading>
            <Text mb={4}>
              {t('ABOUT_P_10')}
            </Text>
            <Heading size="sm" mb={2}>
              {t('International Fund for Agriculture Development')}
            </Heading>
            <Text mb={4}>
              {t('ABOUT_P_11')}
            </Text>
            <Heading size="sm mb={2}">{t('World Vision Canada')}</Heading>
            <Text mb={4}>
              {t('ABOUT_P_12')}
            </Text>
            <Heading size="sm" mb={2}>
              Canadian Food Security Policy Group
            </Heading>
            <Text mb={4}>
              {t('ABOUT_P_13')}
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default About;
