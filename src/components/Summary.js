import React, { useContext } from "react";
import {
  Button,
  SimpleGrid,
  Box,
  Text,
  Img,
  Heading,
  Container,
  Tag,
  Stack,
} from "@chakra-ui/react";
import africaIcon from "../img/africa.png";
import radioIcon from "../img/radio.png";
import scriptIcon from "../img/script.png";
import loveIcon from "../img/love.png";
import conversationIcon from "../img/conversation.png";
import questionIcon from "../img/question.png";
import photo1 from "../img/photo1.jpg";
import photo2 from "../img/photo2.jpg";
import photo3 from "../img/Adosante.jpg";
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

  return (
    <>
      <Box bg="white" position={"relative"}>
        <Container maxW={"7xl"} zIndex={10} position={"relative"}>
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
                  {t("Listening to farmers")}
                </Text>
                <Heading
                  color={"#dfa400"}
                  mb={5}
                  fontSize={{ base: "3xl", md: "5xl" }}
                >
                  {t("SUMMARY_P_1")}
                </Heading>
                <Text fontSize={"xl"} color={"#dfa400"}>
                  {t("SUMMARY_P_2")}
                </Text>
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={0}
                  mt={10}
                  py={5}
                >
                  <Box
                    bg={`url(${photo2})`}
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    minHeight="400px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box display="flex" alignItems="center" px={10}>
                    <Text fontSize="1.7em" color="gray">
                      <Trans i18nKey="SUMMARY_P_3">
                        <strong>Respondents overwhelmingly predicted</strong> a
                        future in farming for their children. Only one in nine
                        people felt today’s youth should choose another
                        occupation.
                      </Trans>
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="center" px={10}>
                    <Text fontSize="1.7em" color="gray">
                      <Trans i18nKey="SUMMARY_P_4">
                        <b>Almost 75% of respondents</b> reported having
                        concerns about the safety and quality of the food that
                        is available to their families.
                      </Trans>
                    </Text>
                  </Box>
                  <Box
                    bg={`url(${photo1})`}
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    minHeight="400px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box
                    bg={`url(${photo3})`}
                    backgroundSize="cover"
                    backgroundPosition="top center"
                    minHeight="400px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box display="flex" alignItems="center" px={10}>
                    <Text fontSize="1.7em" color="gray">
                      <Trans i18nKey="SUMMARY_P_5">
                        <b>More than 90% of callers</b> felt there was something
                        they could do in their community to cope with climate
                        change.
                      </Trans>
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box position={"relative"} bg="#edf2f7">
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
                    heading={"4"}
                    text={
                      <strong>{t('Countries')}</strong>
                    }
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
                    heading={"6"}
                    text={
                      <strong>{t('Radio stations')}</strong>
                    }
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
                    heading={"3"}
                    text={
                      <Trans i18nKey="SUMMARY_P_6">
                        <strong>Episodes</strong> per station
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
                    heading={"3,494"}
                    text={
                      <strong>{t('Total callers')}</strong>
                    }
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
                    heading={"11,854"}
                    text={
                      <Trans i18nKey="SUMMARY_P_7">
                        <strong>Total responses</strong> to questions
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
                    heading={"2,648"}
                    text={
                      <Trans i18nKey="SUMMARY_P_8">
                        <strong>Audio messages</strong> left
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
                    {t('Learn more')}
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
      </Box>
    </>
  );
}

export default Summary;
