import React, { useContext } from "react";
import {
  Grid,
  GridItem,
  useColorModeValue,
  Button,
  SimpleGrid,
  Link,
  Box,
  Text,
  Img,
  Heading,
  Container,
  Tag,
  Stack,
} from "@chakra-ui/react";
// import africaIcon from "../img/africa.png";
// import radioIcon from "../img/radio.png";
// import scriptIcon from "../img/script.png";
// import loveIcon from "../img/love.png";
// import conversationIcon from "../img/conversation.png";
// import questionIcon from "../img/question.png";
import photo1 from "../img/Feature1.jpg";
import photo2 from "../img/Feature2.jpg";
import photo4 from "../img/Feature3.jpg";
import lbg from "../img/layoutBG.png"
import { AppContext } from "../contexts/App";
import { Trans, useTranslation } from "react-i18next";

import ifadLogo from "../img/ifad-logo.svg";
import fidaFr from "../img/fida_fr.png";
import farmRadioLogo from "../img/logo-farm-radio-international.png";
import farmRadioLogoFr from "../img/FRI_fr.png";

function SummaryItem({ heading, text, children }) {
  return (
    <Box mt={5} p={3} align="center">
      {children}
      <Tag
        bg="#4c9f38"
        color="white"
        fontFamily={"heading"}
        fontSize={"6xl"}
        borderRadius={0}
        px={7}
        py={3}
        mb={3}
      >
        {heading}
      </Tag>
      <Text fontSize={"2xl"} color={"gray.800"}>
        {text}
      </Text>
    </Box>
  );
}

function Summary() {
  const { setAboutPageVisible } = useContext(AppContext);
  const { t } = useTranslation();

  const { language } = useContext(AppContext);

  return (
    <>
                {/* <Box
                  bg={`url(${hero})`}
                  backgroundSize="cover"
                  backgroundPosition="center top"
                  color={"white"}
                  verticalAlign="center"
                >
                <Container maxW={"7xl"} zIndex={10} position={"relative"}>
                  <SimpleGrid columns={3} spacing={1} height="900px" alignItems={"center"}>
                    
                    <Box>
                      <Heading mb={2} fontFamily="BebasB" fontSize={"90px"} lineHeight={"95px"} fontWeight={"400"} textTransform={"Uppercase"}>
                        {t("Listening to Rural People 2022")}
                      </Heading>
                      <Text mb={3}>{t("HERO_INTRO_1")}</Text>
                      <Button
                          onClick={() => {
                            setAboutPageVisible(true);
                            document.location.href = "#";
                          }}
                          px={8}
                          py={8}
                          my={2}
                          size="md"
                          color="white"
                          bg="transparent"
                          border={"1px solid #fff"}
                          _hover={{ bg: "#4c9f38", border:"1px solid transparent" }}
                        >
                          {t("Click to listen to their voices.")}
                      </Button>
                    </Box>

                    <Box  height='80px'>
                      
                    </Box>
                    <Box  height='80px'>
                      
                    </Box>
                    
                  </SimpleGrid>
                </Container> 
                </Box>

                <Box
                  // bg={useColorModeValue("gray.100", "gray.900")}
                  // color={useColorModeValue("gray.700", "gray.200")}
                  mt="-75px"
                  color="white"
                  fontFamily={"BebasR"}
                  textTransform={"Uppercase"}
                >
                <Container maxW={"7xl"} zIndex={10} position={"relative"} bg='#4c9f38' borderRadius="5px" >
                  <SimpleGrid columns={6} spacing={0} minHeight='150px' py="15">
                    <Box  borderRight="1px solid #fff" textAlign="center" > 
                        <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"}>2</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}> Countries</Text>
                        </Trans>
                    </Box>
                    <Box borderRight="1px solid #fff"  textAlign="center" >
                      <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"}>7</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}>Radio Stations</Text>
                        </Trans>
                    </Box>
                    <Box borderRight="1px solid #fff"  textAlign="center" >
                        <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"}>21</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}>Original Episodes</Text>
                        </Trans>
                    </Box>
                    <Box borderRight="1px solid #fff"  textAlign="center" >
                        <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"}>14,356</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}>Respondents</Text>
                        </Trans>
                    </Box>
                    <Box borderRight="1px solid #fff"  textAlign="center" >
                        <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"}>122,529</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}>Poll Responses</Text>
                        </Trans>
                    </Box>
                    <Box textAlign="center" >
                        <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"}>9,317</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}>Audio Comments</Text>
                        </Trans>
                    </Box>
                  </SimpleGrid>
                </Container> 
                </Box> */}

                

      <Box bg={`url(${lbg})`} backgroundSize="contain" position={"relative"}>
        <Container maxW={"8xl"} zIndex={10} position={"relative"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 10, xl: 20 }}
            >
              <Box id="insights" mb={{ base: 8, md: 20 }}>
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                  mb={3}
                  fontSize={"2xl"}
                  color={"#dfa400"}
                >
                  {/* {t("Listening to farmers")} */}
                </Text>
                <Heading
                  color={"#4c9f38"}
                  mb={5}
                  fontSize={{ base: "4xl", md: "6xl" }}
                  fontFamily="BebasR" textTransform={"uppercase"}
                >
                  {t("SUMMARY_P_1")}
                </Heading>
                <Text fontSize={"xl"} >
                  {t("SUMMARY_P_2")}
                </Text>


                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={10}
                  mt={10}
                  py={30}
                >
                  <Box
                    bg={`url(${photo2})`}
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    minHeight="700px"
                    borderRadius="5px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box display="flex" alignItems="center" px={10}>
                    <Text fontSize="1.4em" color="gray" textAlign="justify">
                      <Trans i18nKey="SUMMARY_P_3">
                      Communities in Burkina Faso and Ethiopia told us 
                      over and over again that climate change was harming 
                      their communities. <b>Almost 90% of respondents identified 
                      changes due to climate change</b> in at least one of these areas: 
                      the timing and duration of rainy seasons, the volume of rainfall, 
                      the frequency of flooding, average temperatures and the type and quantity 
                      of food available since their youth. What struck us was this: the majority 
                      of respondents told us that farming and raising livestock is more difficult 
                      today than it was in the past.
                        
                      </Trans>
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="center" px={10}>
                    <Text fontSize="1.4em" color="gray" textAlign="justify">
                      <Trans i18nKey="SUMMARY_P_4">
                      It’s clear that climate change is affecting rural farmers
                       — but rural farmers haven’t given up. <b>An average of 70% of respondents told us 
                        they are taking steps to mitigate the impact in their communities and on their livelihoods.</b> 
                        They are planting native plants and trees, adopting methods to find and preserve water, 
                        taking steps to prevent natural disasters, and working together to improve farming for everyone. 
                      </Trans>
                    </Text>
                  </Box>
                  <Box
                    bg={`url(${photo1})`}
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    minHeight="700px"
                    borderRadius="5px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box
                    bg={`url(${photo4})`}
                    backgroundSize="cover"
                    backgroundPosition="top center"
                    minHeight="700px"
                    borderRadius="5px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box display="flex" alignItems="center" px={5}>
                    <Text fontSize="1.4em" color="gray" textAlign="justify">
                      <Trans i18nKey="SUMMARY_P_5">
                        Remarkably, <b>96% of participants in both countries agreed that it was important 
                        to take action to protect biodiversity.</b> 
                        Rural farmers in both countries believe that the most effective 
                        approach to increase biodiversity is to promote and support more 
                        nature-friendly farming and livestock practices and to enable farmers 
                        to earn income by protecting and restoring biodiversity. But they want 
                        their governments to assist them in climate-change adaptation. Highest 
                        on their priority list? The improvement of water supply through irrigation 
                        and support for protecting nature and planting native trees.
                      </Trans>
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box position={"relative"} bg="#003870" color="#fff" h="200px" style={{ display: 'flex', fontSize: '1.3em', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '700px' }}>
          Please also visit <a style={{ fontWeight: 'bold' }} href="https://www.ifad.org/ruralvoices/">ifad.org/ruralvoices</a>{' '}
          to learn about the Rural Voices initiative from the
          International Fund for Agricultural Development
        </div>
      </Box>
      {/* <Box position={"relative"} bg="#edf2f7">
        <Container maxW={"7xl"} zIndex={10} position={"relative"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 10, xl: 20 }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={10}>
                  <SummaryItem
                    heading={"2"}
                    text={<strong>{t("Countries")}</strong>}
                  >
                    <Box
                      height="180px"
                      py={6}
                      justifyContent="center"
                      alignItems="center"
                      d="flex"
                    >
                      <Img src={africaIcon} height="120px" />
                    </Box>
                  </SummaryItem>
                  <SummaryItem
                    heading={"7"}
                    text={<strong>{t("Radio Stations")}</strong>}
                  >
                    <Box
                      height="180px"
                      py={6}
                      justifyContent="center"
                      alignItems="center"
                      d="flex"
                    >
                      <Img src={radioIcon} height="130px" mb={5} />
                    </Box>
                  </SummaryItem>
                  <SummaryItem
                    heading={"21"}
                    text={
                      <Trans i18nKey="SUMMARY_P_6">
                        <strong>Original Episodes</strong>
                      </Trans>
                    }
                  >
                    <Box
                      height="180px"
                      py={6}
                      justifyContent="center"
                      alignItems="center"
                      d="flex"
                    >
                      <Img src={scriptIcon} height="130px" />
                    </Box>
                  </SummaryItem>
                  <SummaryItem
                    heading={"14,356"}
                    text={<strong>{t("Respondents")}</strong>}
                  >
                    <Box
                      height="180px"
                      py={6}
                      justifyContent="center"
                      alignItems="center"
                      d="flex"
                    >
                      <Img src={questionIcon} height="130px" />
                    </Box>
                  </SummaryItem>
                  <SummaryItem
                    heading={"122,529"}
                    text={
                      <Trans i18nKey="SUMMARY_P_7">
                        <strong>Poll Responses</strong>
                      </Trans>
                    }
                  >
                    <Box
                      height="180px"
                      py={6}
                      justifyContent="center"
                      alignItems="center"
                      d="flex"
                    >
                      <Img src={conversationIcon} height="130px" />
                    </Box>
                  </SummaryItem>
                  <SummaryItem
                    heading={"9,317"}
                    text={
                      <Trans i18nKey="SUMMARY_P_8">
                        <strong>Audio Comment</strong>
                      </Trans>
                    }
                  >
                    <Box
                      height="180px"
                      py={6}
                      justifyContent="center"
                      alignItems="center"
                      d="flex"
                    >
                      <Img src={loveIcon} height="130px" />
                    </Box>
                  </SummaryItem>
                </SimpleGrid>
                <Box align="center" mt={10}>
                  <Button
                    onClick={() => {
                      setAboutPageVisible(true);
                      document.location.href = "#";
                    }}
                    px={8}
                    py={8}
                    my={5}
                    size="lg"
                    color="white"
                    bg="#01add8"
                    _hover={{ bg: "#01add8" }}
                  >
                    {t("Learn more")}
                  </Button>
                </Box>
                <Box align="center" mt={10}>
                  <Text color="gray" fontSize="12px">
                    Icons made by{" "}
                    <a href="https://www.freepik.com" title="Freepik">
                      Freepik
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box> */}
    </>
  );
}

export default Summary;
