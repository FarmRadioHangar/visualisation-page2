import "@brainhubeu/react-carousel/lib/style.css";
import React, { useState, useContext } from "react";
import MapChart from "./MapChart";
import { ChatIcon } from "@chakra-ui/icons";
import { AiOutlineLineChart } from "react-icons/ai";
import { VscFilePdf } from "react-icons/vsc";
import { Doughnut, Pie, Bar } from "react-chartjs-2";
import {
  SimpleGrid,
  Box,
  Table,
  Link,
  Tr,
  Td,
  Tbody,
  Tabs,
  TabList,
  Tab,
  HStack,
  Img,
  Button,
  Heading,
  Select,
  Icon,
  Container,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { AppContext } from "../contexts/App";
import { RiBook2Line } from "react-icons/ri";
import illustration from "../img/illustration.png";
import { Trans, useTranslation } from "react-i18next";
import Carousel from "@brainhubeu/react-carousel";

function getSummary(question) {
  const bf = getResults("bf", question);
  const gh = getResults("gh", question);
  const tz = getResults("tz", question);
  const ug = getResults("ug", question);

  const getAll = (i) =>
    bf.female[i] +
    bf.male[i] +
    gh.female[i] +
    gh.male[i] +
    tz.female[i] +
    tz.male[i] +
    ug.female[i] +
    ug.male[i];

  return bf.female.map((_, i) => getAll(i));
}

function getResults(country, question) {
  switch (question) {
    case "1.1":
      switch (country) {
        case "bf":
          return {
            adults: [37, 16, 8, 16],
            youth: [18, 8, 5, 11],
            female: [14, 10, 2, 9],
            male: [41, 14, 11, 18],
          };
        case "gh":
          return {
            adults: [100, 77, 41, 50],
            youth: [22, 20, 17, 18],
            female: [33, 34, 17, 14],
            male: [89, 63, 41, 54],
          };
        case "tz":
          return {
            adults: [17, 14, 14, 27],
            youth: [7, 12, 3, 16],
            female: [9, 9, 4, 7],
            male: [15, 17, 13, 36],
          };
        case "ug":
          return {
            adults: [18, 28, 27, 32],
            youth: [25, 58, 44, 58],
            female: [19, 30, 33, 36],
            male: [24, 56, 38, 54],
          };
        default:
          return {};
      }
    case "1.2":
      switch (country) {
        case "bf":
          return {
            adults: [20, 21, 17, 11],
            youth: [10, 9, 7, 12],
            female: [10, 12, 10, 2],
            male: [20, 18, 14, 21],
          };
        case "gh":
          return {
            adults: [45, 119, 38, 37],
            youth: [17, 33, 21, 8],
            female: [26, 35, 17, 10],
            male: [36, 117, 42, 35],
          };
        case "tz":
          return {
            adults: [24, 24, 8, 12],
            youth: [14, 14, 1, 8],
            female: [11, 10, 2, 5],
            male: [27, 28, 7, 15],
          };
        case "ug":
          return {
            adults: [19, 31, 23, 18],
            youth: [23, 68, 23, 48],
            female: [19, 29, 24, 32],
            male: [23, 70, 22, 34],
          };
        default:
          return {};
      }
    case "2.1":
      switch (country) {
        case "bf":
          return {
            adults: [27, 10, 4, 3, 1],
            youth: [16, 5, 7, 1, 0],
            female: [20, 6, 6, 1, 0],
            male: [23, 9, 5, 3, 1],
          };
        case "gh":
          return {
            adults: [159, 66, 53, 111, 20],
            youth: [42, 25, 20, 52, 14],
            female: [62, 26, 24, 31, 9],
            male: [139, 65, 49, 132, 25],
          };
        case "tz":
          return {
            adults: [17, 6, 14, 12, 13],
            youth: [7, 4, 12, 4, 6],
            female: [13, 3, 11, 8, 9],
            male: [11, 7, 15, 8, 10],
          };
        case "ug":
          return {
            adults: [52, 53, 56, 31, 44],
            youth: [58, 75, 67, 50, 63],
            female: [41, 57, 39, 32, 37],
            male: [69, 71, 84, 49, 79],
          };
        default:
          return {};
      }
    case "2.2":
      switch (country) {
        case "bf":
          return {
            adults: [16, 20, 7, 2],
            youth: [10, 13, 4, 2],
            female: [17, 10, 3, 3],
            male: [9, 23, 8, 1],
          };
        case "gh":
          return {
            adults: [188, 146, 41, 34],
            youth: [57, 58, 30, 8],
            female: [66, 49, 16, 21],
            male: [179, 155, 55, 21],
          };
        case "tz":
          return {
            adults: [11, 14, 5, 32],
            youth: [2, 8, 1, 22],
            female: [5, 9, 4, 26],
            male: [8, 13, 2, 28],
          };
        case "ug":
          return {
            adults: [51, 75, 19, 91],
            youth: [52, 95, 31, 135],
            female: [46, 70, 29, 61],
            male: [57, 100, 21, 165],
          };
        default:
          return {};
      }
    case "3.1":
      switch (country) {
        case "bf":
          return {
            adults: [46, 16, 7, 6, 7],
            youth: [16, 7, 11, 7, 4],
            female: [26, 5, 8, 6, 4],
            male: [36, 18, 10, 7, 7],
          };
        case "gh":
          return {
            adults: [11, 18, 18, 10, 2],
            youth: [7, 5, 10, 4, 4],
            female: [7, 3, 10, 7, 2],
            male: [11, 20, 18, 7, 4],
          };
        case "tz":
          return {
            adults: [30, 14, 24, 13, 12],
            youth: [15, 7, 7, 12, 1],
            female: [15, 3, 1, 3, 2],
            male: [30, 18, 30, 22, 11],
          };
        case "ug":
          return {
            adults: [14, 12, 11, 14, 8],
            youth: [22, 16, 29, 25, 11],
            female: [12, 13, 9, 9, 6],
            male: [24, 15, 31, 30, 13],
          };
        default:
          return {};
      }
    case "3.2":
      switch (country) {
        case "bf":
          return {
            adults: [33, 31, 11, 5, 2],
            youth: [12, 16, 8, 6, 3],
            female: [21, 16, 6, 3, 3],
            male: [24, 31, 13, 8, 2],
          };
        case "gh":
          return {
            adults: [18, 10, 11, 19, 1],
            youth: [5, 5, 9, 9, 2],
            female: [9, 4, 6, 9, 1],
            male: [14, 11, 14, 19, 2],
          };
        case "tz":
          return {
            adults: [23, 21, 12, 34, 3],
            youth: [9, 8, 4, 16, 5],
            female: [1, 6, 4, 9, 4],
            male: [31, 23, 12, 41, 4],
          };
        case "ug":
          return {
            adults: [5, 10, 13, 21, 10],
            youth: [16, 20, 13, 39, 15],
            female: [8, 6, 10, 14, 11],
            male: [13, 24, 16, 46, 14],
          };
        default:
          return {};
      }
    default:
      return [];
  }
}

function SummaryCard({ title, subtitle, results, options, colors }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card maxW="2xl">
        <VStack>
          <Heading fontSize="xl" fontWeight={600}>
            {title}
          </Heading>
          <Heading fontSize="md" my={9}>
            {subtitle}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
            <Table size="sm" mb={6}>
              <Tbody>
                {options.map((option, i) => (
                  <Tr key={i}>
                    <Td fontSize="0.7em">
                      <Box
                        borderRadius="50%"
                        w="24px"
                        h="23px"
                        background={colors[i]}
                        d="flex"
                        color="white"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {i + 1}
                      </Box>
                    </Td>
                    <Td fontSize="0.8em">{option}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Box mt={5} height="190px" width="100%">
              <Chart2 data={results} labels={options} colors={colors} />
            </Box>
          </SimpleGrid>
        </VStack>
      </Card>
    </div>
  );
}

function QuestionCard({ episode, question, chart: Chart, options = [] }) {
  const [tabIndex, setTabIndex] = useState(0);
  const { country } = useContext(AppContext);
  const { t } = useTranslation();

  const results = getResults(country, `${episode}.${question.number}`);

  const colors = [
    "#4c9f38",
    "#01558b",
    "#fdb714",
    "#862539",
    "#01add8",
    "#ef412a",
    "#d2a02a",
  ];

  return (
    <Card>
      <Heading fontSize="sm" mb={4}>
        Question #{question.number}
      </Heading>
      <Text mb={2} fontSize="0.9em">
        {question.text}
      </Text>
      <Table size="sm" mb={6}>
        <Tbody>
          {options.map((option, i) => (
            <Tr key={i}>
              <Td fontSize="0.7em">
                <Box
                  borderRadius="50%"
                  w="24px"
                  h="23px"
                  background={colors[i]}
                  d="flex"
                  color="white"
                  alignItems="center"
                  justifyContent="center"
                >
                  {i + 1}
                </Box>
              </Td>
              <Td fontSize="0.8em">{option}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Tabs variant="soft-rounded" size="sm" onChange={setTabIndex}>
        <TabList>
          <Tab>{t("Adults")}</Tab>
          <Tab>{t("Youth")}</Tab>
          <Tab>{t("Female")}</Tab>
          <Tab>{t("Male")}</Tab>
        </TabList>
      </Tabs>
      <Box mt={5} height="190px" width="100%">
        <Chart
          data={results[["adults", "youth", "female", "male"][tabIndex]]}
          labels={options}
          colors={colors}
        />
      </Box>
    </Card>
  );
}

function Card({ children, ...props }) {
  return (
    <Box border="1px solid #e2e8f0" borderRadius={12} p={4} w="100%" {...props}>
      {children}
    </Box>
  );
}

function Chart1({ data, labels, colors }) {
  return (
    <Pie
      data={{
        labels,
        datasets: [
          {
            borderWidth: 0.5,
            data,
            borderColor: colors,
            backgroundColor: colors,
          },
        ],
      }}
      options={{
        animations: true,
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}

function Chart2({ data, labels, colors }) {
  return (
    <Bar
      data={{
        labels: labels || labels.map((_, i) => i + 1),
        datasets: [
          {
            data,
            borderColor: colors,
            backgroundColor: colors,
          },
        ],
      }}
      options={{
        animations: true,
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: "x",
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          x: {
            grid: {
              display: true,
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
}

function Chart3({ data, labels, colors }) {
  return (
    <Bar
      data={{
        labels: labels || data.map((_, i) => i),
        datasets: [
          {
            data,
            borderColor: colors,
            backgroundColor: colors,
          },
        ],
      }}
      options={{
        animations: true,
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: true,
              drawBorder: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
}

function Chart4({ data, labels, colors }) {
  return (
    <Doughnut
      data={{
        labels,
        datasets: [
          {
            data,
            borderColor: colors,
            backgroundColor: colors,
          },
        ],
      }}
      options={{
        animations: true,
        maintainAspectRatio: false,
        responsive: true,
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}

function Results() {
  const { language, setLanguage , country, setCountry } = useContext(AppContext);
  const { t } = useTranslation();

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const getCountryName = (code) => {
    switch (code) {
      case "gh":
        return t("Ghana");
      case "tz":
        return t("Tanzania");
      case "ug":
        return t("Uganda");
      case "bf":
        return t("Burkina Faso");
      default:
        return "";
    }
  };

  const getFlag = (code) => {
    switch (code) {
      case "gh":
        return "🇬🇭";
      case "tz":
        return "🇹🇿";
      case "ug":
        return "🇺🇬";
      case "bf":
        return "🇧🇫";
      default:
        return "";
    }
  };

  return (
    <Box bg="white" display="flex" flexDirection="column">
      <Box position="relative" py={10} my={10} mx={10}>
        <div>
          <Carousel plugins={["arrows"]}>
            <SummaryCard
              title={`${t("Episode")} 1`}
              subtitle={`Q1: ${t("RESULTS_QUESTION_1")}`}
              results={getSummary("1.1")}
              options={[
                t("It might cause illness due to poor food hygiene practices"),
                t(
                  "The range of available foods doesn’t have all the nutrients needed for good health"
                ),
                t("It might contain harmful chemicals"),
                t(
                  "I don’t worry - the food my family eats is already safe and nutritious"
                ),
              ]}
              colors={[
                "#4c9f38",
                "#01558b",
                "#fdb714",
                "#862539",
                "#01add8",
                "#ef412a",
                "#d2a02a",
              ]}
            />
            <SummaryCard
              title={`${t("Episode")} 1`}
              subtitle={`Q2: ${t("RESULTS_QUESTION_2")}`}
              results={getSummary("1.2")}
              options={[
                t("Those most in need eat first and others sacrifice"),
                t("Ask everyone to cut back equally"),
                t("Sell assets like animals"),
                t("Find other ways to earn money"),
              ]}
              colors={[
                "#4c9f38",
                "#01558b",
                "#fdb714",
                "#862539",
                "#01add8",
                "#ef412a",
                "#d2a02a",
              ]}
            />
            <SummaryCard
              title={`${t("Episode")} 2`}
              subtitle={`Q1: ${t("RESULTS_QUESTION_3")}`}
              results={getSummary("2.1")}
              options={[
                t("Loans or credit"),
                t("Secure access to and control over land"),
                t("High quality inputs"),
                t("Better information"),
                t("Better market access"),
              ]}
              colors={[
                "#4c9f38",
                "#01558b",
                "#fdb714",
                "#862539",
                "#01add8",
                "#ef412a",
                "#d2a02a",
              ]}
            />
            <SummaryCard
              title={`${t("Episode")} 2`}
              subtitle={`Q2: ${t("RESULTS_QUESTION_4")}`}
              results={getSummary("2.2")}
              options={[
                t("They will be successful"),
                t("They will struggle to succeed unless things change"),
                t(
                  "Young people should avoid farming and pick another occupation"
                ),
                t(
                  "Young people will farm, but they will need to earn money from other sources too"
                ),
              ]}
              colors={[
                "#4c9f38",
                "#01558b",
                "#fdb714",
                "#862539",
                "#01add8",
                "#ef412a",
                "#d2a02a",
              ]}
            />
            <SummaryCard
              title={`${t("Episode")} 3`}
              subtitle={`Q1: ${t("RESULTS_QUESTION_5")}`}
              results={getSummary("3.1")}
              options={[
                t("Family, friends, and neighbours"),
                t("Farmers’ co-operative/group"),
                t("Radio"),
                t("Agricultural experts"),
                t("Input suppliers"),
              ]}
              colors={[
                "#4c9f38",
                "#01558b",
                "#fdb714",
                "#862539",
                "#01add8",
                "#ef412a",
                "#d2a02a",
              ]}
            />
            <SummaryCard
              title={`${t("Episode")} 3`}
              subtitle={`Q2: ${t("RESULTS_QUESTION_6")}`}
              results={getSummary("3.2")}
              options={[
                t("Improved inputs"),
                t("Good information on how to adapt"),
                t("Better use of water"),
                t("Protecting the natural environment"),
                t("Moving to another place"),
              ]}
              colors={[
                "#4c9f38",
                "#01558b",
                "#fdb714",
                "#862539",
                "#01add8",
                "#ef412a",
                "#d2a02a",
              ]}
            />
          </Carousel>
        </div>
      </Box>
      <Box id="results" bg="#dfa400" px={0} py={0} position="relative">
        <Box
          position="absolute"
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"left"}>
              <Heading fontSize={"4xl"} color="white">
                {t("What farmers think about food systems")}
              </Heading>
              <Text color={"white"} fontSize={"2xl"}>
                {t(
                  "Click on the dropdown menu below to explore the responses of farmers in each country."
                )}
              </Text>
              <Box>
                <Select
                  option={country}
                  onChange={handleChangeCountry}
                  bg="#ffffffa8"
                  color="#dfa400"
                  fontWeight="bold"
                  placeholder={t("Select a country")}
                  border="none"
                  size="lg"
                >
                  <option value="bf">
                    {getFlag("bf")} {t("Burkina Faso")}
                  </option>
                  <option value="gh">
                    {getFlag("gh")} {t("Ghana")}
                  </option>
                  <option value="tz">
                    {getFlag("tz")} {t("Tanzania")}
                  </option>
                  <option value="ug">
                    {getFlag("ug")} {t("Uganda")}
                  </option>
                </Select>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box>
          <Stack textAlign={"center"}>
            <Box>
              <MapChart selectedCountry={country.toUpperCase()} />
            </Box>
          </Stack>
        </Box>
      </Box>
      <Container maxW={"6xl"} my={10} pt={8} pb={10}>
        {country && (
          <>
            <Box>
              <Heading
                color="#4c9f38"
                mb={10}
                size="xl"
                display="flex"
                alignItems="center"
              >
                <Icon mr={3} my={5} as={AiOutlineLineChart} />
                {t("Results from")} {getCountryName(country)}{" "}
              </Heading>
            </Box>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={10}
              mb={10}
            >
              <HStack align={"top"}>
                <Box px={2}>
                  <Icon as={ChatIcon} color="#4c9f38" />
                </Box>
                <VStack align={"start"} width="100%" spacing={5}>
                  <Heading fontSize="xl" fontWeight={600}>
                    {t("Episode")} 1
                  </Heading>
                  <QuestionCard
                    episode={1}
                    chart={Chart2}
                    question={{
                      number: 1,
                      text: t("RESULTS_QUESTION_1"),
                    }}
                    options={[
                      t(
                        "It might cause illness due to poor food hygiene practices"
                      ),
                      t(
                        "The range of available foods doesn’t have all the nutrients needed for good health"
                      ),
                      t("It might contain harmful chemicals"),
                      t(
                        "I don’t worry - the food my family eats is already safe and nutritious"
                      ),
                    ]}
                  />
                  <QuestionCard
                    episode={1}
                    chart={Chart1}
                    question={{
                      number: 2,
                      text: t("RESULTS_QUESTION_2"),
                    }}
                    options={[
                      t("Those most in need eat first and others sacrifice"),
                      t("Ask everyone to cut back equally"),
                      t("Sell assets like animals"),
                      t("Find other ways to earn money"),
                    ]}
                  />
                </VStack>
              </HStack>
              <HStack align={"top"}>
                <Box px={2}>
                  <Icon as={ChatIcon} color="#4c9f38" />
                </Box>
                <VStack align={"start"} width="100%" spacing={5}>
                  <Heading fontSize="xl" fontWeight={600}>
                    {t("Episode")} 2
                  </Heading>
                  <QuestionCard
                    episode={2}
                    chart={Chart1}
                    question={{
                      number: 1,
                      text: t("RESULTS_QUESTION_3"),
                    }}
                    options={[
                      t("Loans or credit"),
                      t("Secure access to and control over land"),
                      t("High quality inputs"),
                      t("Better information"),
                      t("Better market access"),
                    ]}
                  />
                  <QuestionCard
                    episode={2}
                    chart={Chart3}
                    question={{
                      number: 2,
                      text: t("RESULTS_QUESTION_4"),
                    }}
                    options={[
                      t("They will be successful"),
                      t("They will struggle to succeed unless things change"),
                      t(
                        "Young people should avoid farming and pick another occupation"
                      ),
                      t(
                        "Young people will farm, but they will need to earn money from other sources too"
                      ),
                    ]}
                  />
                </VStack>
              </HStack>
              <HStack align={"top"}>
                <Box px={2}>
                  <Icon as={ChatIcon} color="#4c9f38" />
                </Box>
                <VStack align={"start"} width="100%" spacing={5}>
                  <Heading fontSize="xl" fontWeight={600}>
                    {t("Episode")} 3
                  </Heading>
                  <QuestionCard
                    episode={3}
                    chart={Chart4}
                    question={{
                      number: 1,
                      text: t("RESULTS_QUESTION_5"),
                    }}
                    options={[
                      t("Family, friends, and neighbours"),
                      t("Farmers’ co-operative/group"),
                      t("Radio"),
                      t("Agricultural experts"),
                      t("Input suppliers"),
                    ]}
                  />
                  <QuestionCard
                    episode={3}
                    chart={Chart1}
                    question={{
                      number: 2,
                      text: t("RESULTS_QUESTION_6"),
                    }}
                    options={[
                      t("Improved inputs"),
                      t("Good information on how to adapt"),
                      t("Better use of water"),
                      t("Protecting the natural environment"),
                      t("Moving to another place"),
                    ]}
                  />
                </VStack>
              </HStack>
            </SimpleGrid>
          </>
        )}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box
            align="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Img src={illustration} w="350px" />
            <Text color="gray" fontSize="12px">
              <a href="https://storyset.com/data">
                Data illustrations by Storyset
              </a>
            </Text>
          </Box>
          <Box
            id="report"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <Box>
              <Heading
                color="#4c9f38"
                size="xl"
                display="flex"
                alignItems="center"
              >
                <Icon mr={3} as={RiBook2Line} />
                {t("Report")}
              </Heading>
            </Box>
            <Text color="#4c9f38" py={4} fontSize="1.3em">
              <Trans i18nKey="RESULTS_P_1">
                Want a deep dive into the results?
              </Trans>
            </Text>
            <Button
              onClick={() => {
                if ('fr' === language) {
                  document.location.href="/Dialogues_à_l'antenne_-_À_l'écoute_des_populations_rurales_(intégrale).pdf";
                } else {
                  document.location.href='/On_Air_Dialogues_-_Listening_to_rural_people_(full).pdf';
                }
              }}
              py={8}
              mt={5}
              size="lg"
              color="white"
              bg="#01add8"
              _hover={{ bg: "#008db8" }}
            >
              <VscFilePdf size="33" style={{ marginRight: '8px' }} />
              {t("Download full report")} (PDF)
            </Button>
            <Button
              onClick={() => {
                if ('fr' === language) {
                  document.location.href="/Dialogues_à_l'antenne_-_À_l'écoute_des_populations_rurales_(points_saillants).pdf";
                } else {
                  document.location.href='/On_Air_Dialogues_-_Listening_to_rural_people_(highlights).pdf';
                }
              }}
              py={8}
              mt={2}
              mb={5}
              size="lg"
              color="white"
              bg="#01add8"
              _hover={{ bg: "#008db8" }}
            >
              <VscFilePdf size="33" style={{ marginRight: '8px' }} />
              {t("Download highlights")} (PDF)
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Results;
