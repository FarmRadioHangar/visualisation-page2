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
  Tr,
  Td,
  Tbody,
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

function getSummary(question) {
  const bf = getResults("bf", question);
  const et = getResults("et", question);
  
  const getAll = (i) =>
    bf.female[i] +
    bf.male[i] +
    et.female[i] +
    et.male[i];

  return bf.female.map((_, i) => getAll(i));
}

function getResults(country, question) {
  switch (question) {
    case "1.1":
      switch (country) {
        case "bf":
          return {
            rsult: [70, 71, 44, 65, 57, 45],
          };
        case "et":
          return {
            rsult: [76, 79, 62, 69, 58, 65 ],
          };
        default:
          return {};
      }
    case "1.2":
      switch (country) {
        case "bf":
          return {
            rsult: [69.9, 18.2, 8.3, 6.5, 4.0],
          };
        case "et":
          return {
            rsult: [54.5, 20.6, 10.8, 9.2, 4.9],
          };
        default:
          return {};
      }
      case "1.3":
        switch (country) {
          case "bf":
            return {
              rsult: [20.7, 7.5, 71.9],
            };
          case "et":
            return {
              rsult: [36.0, 12.5, 51.5],
            };
          default:
            return {};
        }  
    case "2.1":
      switch (country) {
        case "bf":
          return {
            rsult: [58.0, 69.0, 62.1, 67.0],
          };
        case "et":
          return {
            rsult: [78.1, 83.6, 75.7, 76.5],
          };
        default:
          return {};
      }
    case "2.2":
      switch (country) {
        case "bf":
          return {
            rsult: [73, 68, 59, 65, 66],
          };
        case "et":
          return {
            rsult: [86, 73, 85, 85, 82],
          };
        default:
          return {};
      }
    case "3.1":
      switch (country) {
        case "bf":
          return {
            rsult: [32.96, 31.59, 11.98, 12.32, 11.16],
          };
        case "et":
          return {
            rsult: [46.84, 24.45, 11.83, 7.69, 9.18],
          };
        default:
          return {};
      }
    case "3.2":
      switch (country) {
        case "bf":
          return {
            rsult: [38, 26, 16, 12, 9],
          };
        case "et":
          return {
            rsult: [41, 40, 8, 6, 6],
          };
        default:
          return {};
      }
      case "3.3":
        switch (country) {
          case "bf":
            return {
              rsult: [41, 38, 10, 6, 4],
            };
          case "et":
            return {
              rsult: [49, 29, 6, 11, 4],
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
      <Box mt={5} height="190px" width="100%">
        <Chart
          data={results[["rsult"][tabIndex]]}
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
      case "et":
        return t("Ethiopia");
      case "bf":
        return t("Burkina Faso");
      default:
        return "";
    }
  };

  const getFlag = (code) => {
    switch (code) {
      case "et":
        return "🇪🇹";
      case "bf":
        return "🇧🇫";
      default:
        return "";
    }
  };

  return (
    <Box bg="white" display="flex" flexDirection="column">
      
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
                {t("What rural people think about climate change")}
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
                  <option value="et">
                    {getFlag("et")} {t("Ethiopia")}
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
      <Container maxW={"8xl"} my={10} pt={8} pb={10}>
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
                        "When the rainy season starts and ends"
                      ),
                      t(
                        "The amount of rain that falls over the years"
                      ),
                      t("The frequency of floods"),
                      t("Biodiversity loss"),
                      t("Temperatures -hotter and dryer"),
                      t("Amount and types of food available"),
                    ]}
                  />
                  <QuestionCard
                    episode={1}
                    chart={Chart3}
                    question={{
                      number: 2,
                      text: t("RESULTS_QUESTION_2"),
                    }}
                    options={[
                      t("Changes in the rains"),
                      t("Changes in the temperature"),
                      t("Changes in the kind of crops I can grow or animals I can keep"),
                      t("More frequent disasters like floods, fires or pest outbreaks"),
                      t("Changes in the availability of water"),
                    ]}
                  />
                  <QuestionCard
                    episode={1}
                    chart={Chart2}
                    question={{
                      number: 3,
                      text: t("RESULTS_QUESTION_3"),
                    }}
                    options={[
                      t("It is easier"),
                      t("It is about the same"),
                      t("It is more difficult"),
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
                    chart={Chart3}
                    question={{
                      number: 1,
                      text: t("RESULTS_QUESTION_4"),
                    }}
                    options={[
                      t("Have you found different ways to make a living instead of or as well as farming?"),
                      t("Have you adopted new farming practices that improve the soil and help the natural environment?"),
                      t("Have you changed the time of planting and harvesting?"),
                      t("Have you changed the crops you grow or animals you keep?"),
                     
                    ]}
                  />
                  <QuestionCard
                    episode={2}
                    chart={Chart2}
                    question={{
                      number: 2,
                      text: t("RESULTS_QUESTION_5"),
                    }}
                    options={[
                      t("Planting or protecting native plants and tress"),
                      t("Adopting ways to conserve water or develop new sources of water"),
                      t("Increasing cooperation among farmers to improve farming for everyone"),
                      t("Taking steps to prevent flooding, fire, pest attacks, plant diseases"),
                      t("Average percentage of commmunities taking at least one of these actions"),
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
                    chart={Chart3}
                    question={{
                      number: 1,
                      text: t("RESULTS_QUESTION_6"),
                    }}
                    options={[
                      t("Good predictions and advice about the weather"),
                      t("Advice about the best crop to grow or livestock to raise"),
                      t("Advice about how to improve soil and water conditions"),
                      t("Advice about how to reduce post-harvest losses"),
                      t("Information and advice about managing pests and disease"),
                    ]}
                  />
                  <QuestionCard
                    episode={3}
                    chart={Chart3}
                    question={{
                      number: 2,
                      text: t("RESULTS_QUESTION_7"),
                    }}
                    options={[
                      t("Improve the water supplyy through irrigation"),
                      t("Support planting native trees and plants and protecting nature"),
                      t("Do more research about farming practices that are better suited to the changing environment"),
                      t("Have better extension, information and advisory services"),
                      t("Bring in more favourable policies, laws and regulations effecting farmers"),
                    ]}
                  />
                  <QuestionCard
                    episode={3}
                    chart={Chart3}
                    question={{
                      number: 3,
                      text: t("RESULTS_QUESTION_8"),
                    }}
                    options={[
                      t("Promote and support more nature-friendly farming and livestock practices"),
                      t("Enable farmers to earn money by protecting nature and maintaining a diversity of crops and animals"),
                      t("Favour small-scale farming families rather than large single-crop plantations"),
                      t("Create more protected wilderness areas and parks"),
                      t("No measures should be taken because maximum production is the only priority"),
                      
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
                  document.location.href="/On_Air_Dialogues_2022.pdf";
                } else {
                  document.location.href='/On_Air_Dialogues_2022.pdf';
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
              {t("Download Report")} (PDF)
            </Button>
            {/* <Button
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
            </Button> */}
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Results;
