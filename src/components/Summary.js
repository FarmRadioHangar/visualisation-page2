import React, { useContext } from "react";
import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  Container,
  Tag,
  Stack,
} from "@chakra-ui/react";
import photo1 from "../img/Feature1.jpg";
import photo2 from "../img/Feature2.jpg";
import photo4 from "../img/Feature3.jpg";
import lbg from "../img/layoutBG.png"
import { AppContext } from "../contexts/App";
import { Trans, useTranslation } from "react-i18next";

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

      <Box bg={`url(${lbg})`} backgroundSize="contain" position={"relative"}>
        <Container maxW={"6xl"} zIndex={10} position={"relative"} pt={10}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 10, xl: 20 }}
            >
              <Box id="insights" mb={{ base: 8, md: 20 }}>
                <Heading
                  color={"#4c9f38"}
                  mb={5}
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontFamily="BebasR" textTransform={"uppercase"}
                >
                  {t("SUMMARY_P_1")}
                </Heading>
                <Text fontSize={"xl"} >
                  {t("SUMMARY_P_2")}
                </Text>


                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={1}
                  mt={10}
                  py={30}
                >
                  <Box
                    bg={`url(${photo2})`}
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    minHeight="550px"
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
                       — but rural farmers haven’t given up. <b>More than 90% of respondents told us they are taking 
                        steps to mitigate the impact in their communities and on their livelihoods.</b> 
                        They are planting native plants and trees, adopting methods to find and preserve water, 
                        taking steps to prevent natural disasters, and working together to improve farming for everyone. 
                      </Trans>
                    </Text>
                  </Box>
                  <Box
                    bg={`url(${photo1})`}
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    minHeight="550px"
                    borderRadius="5px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box
                    bg={`url(${photo4})`}
                    backgroundSize="cover"
                    backgroundPosition="top center"
                    minHeight="550px"
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
     
      
    </>
  );
}

export default Summary;
