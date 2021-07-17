import React, { useContext } from "react";
import MapChart from "./MapChart";
import { ChatIcon } from "@chakra-ui/icons";
import { AiOutlineLineChart } from "react-icons/ai";
import { Pie, Bar } from "react-chartjs-2";
import {
  SimpleGrid,
  Box,
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

function Chart1() {
  return (
    <Pie
      data={{
        labels: ["Yes", "No", "It depends"],
        datasets: [
          {
            borderWidth: 0.5,
            label: "# of Votes",
            data: [12, 19, 3],
            borderColor: [
              "#4c9f38",
              "#01558b",
              "#fdb714",
              "#862539",
              "#01add8",
              "#ef412a",
            ],
            backgroundColor: [
              "#4c9f38",
              "#01558b",
              "#fdb714",
              "#862539",
              "#01add8",
              "#ef412a",
            ],
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
      }}
    />
  );
}

function Chart2() {
  return (
    <Bar
      data={{
        labels: ["East", "West", "South"],
        datasets: [
          {
            label: "Dataset 1",
            data: [81, 56, 55, 40],
            borderColor: [
              "#01add8",
              "#ef412a",
              "#d2a02a",
              "#4c9f38",
              "#01558b",
              "#fdb714",
              "#862539",
            ],
            backgroundColor: [
              "#01add8",
              "#ef412a",
              "#d2A02a",
              "#4c9f38",
              "#01558b",
              "#fdb714",
              "#862539",
            ],
          },
        ],
      }}
      options={{
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
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: true,
            },
          },
        },
      }}
    />
  );
}

function Chart3() {
  return (
    <Bar
      data={{
        labels: ["Potatoes", "Maize", "Avocado", "Spaghetti"],
        datasets: [
          {
            label: "Dataset 1",
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: [
              "#4c9f38",
              "#01558b",
              "#fdb714",
              "#862539",
              "#01add8",
              "#ef412a",
              "#D2a02a",
            ],
            backgroundColor: [
              "#4c9f38",
              "#01558b",
              "#fdb714",
              "#862539",
              "#01add8",
              "#ef412a",
              "#D2a02a",
            ],
          },
        ],
      }}
      options={{
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
              display: false,
              drawBorder: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: true,
            },
          },
        },
      }}
    />
  );
}

function Episode({ title, text, children }) {
  return (
    <HStack align={"top"}>
      <Box px={2}>
        <Icon as={ChatIcon} color="#4c9f38" />
      </Box>
      <VStack align={"start"} width="100%">
        <Heading fontSize="xl" fontWeight={600} mb={6}>
          {title}
        </Heading>
        <Box height="190px" width="100%">
          {children}
        </Box>
      </VStack>
    </HStack>
  );
}

function Results() {
  const { country, setCountry } = useContext(AppContext);

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const getCountryName = (code) => {
    switch (code) {
      case "gh":
        return "Ghana";
      case "tz":
        return "Tanzania";
      case "ug":
        return "Uganda";
      case "bf":
        return "Burkina Faso";
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
    <Box>
      <Box bg="#dfa400" px={0} py={0} position="relative">
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
                What farmers think about food systems
              </Heading>
              <Text color={"white"} fontSize={"2xl"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
              <Box>
                <Select
                  option={country}
                  onChange={handleChangeCountry}
                  bg="#ffffffa8"
                  color="#dfa400"
                  fontWeight="bold"
                  placeholder="Select a country"
                  border="none"
                  size="lg"
                >
                  <option value="bf">{getFlag("bf")} Burkina Faso</option>
                  <option value="gh">{getFlag("gh")} Ghana</option>
                  <option value="tz">{getFlag("tz")} Tanzania</option>
                  <option value="ug">{getFlag("ug")} Uganda</option>
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
        {country ? (
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
                Results from {getCountryName(country)}{" "}
              </Heading>
            </Box>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={10}
              mb={10}
            >
              <Episode
                title="Episode 1"
                text={
                  <>
                    This episode's question was about mango. De carne lumbering.
                  </>
                }
              >
                <Chart1 />
              </Episode>
              <Episode
                title="Episode 2"
                text={
                  <>
                    This episode's question was about mango. De carne lumbering.
                  </>
                }
              >
                <Chart2 />
              </Episode>
              <Episode
                title="Episode 3"
                text={
                  <>
                    This episode's question was about mango. De carne lumbering.
                  </>
                }
              >
                <Chart3 />
              </Episode>
            </SimpleGrid>
          </>
        ) : (
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
            <Box justifyContent="center" display="flex" flexDirection="column">
              <Box>
                <Heading
                  color="#4c9f38"
                  size="xl"
                  display="flex"
                  alignItems="center"
                >
                  <Icon mr={3} as={RiBook2Line} />
                  Report
                </Heading>
              </Box>
              <Text color="#4c9f38" py={4} fontSize="1.3em">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed the
                report
              </Text>
              <Button py={8} my={5} size="lg" color="white" bg="#01add8">
                Download the report
              </Button>
            </Box>
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
}

export default Results;
