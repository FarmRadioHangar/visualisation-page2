import React, { useContext, useState } from "react";
import MapChart from "./MapChart";
import { CheckIcon } from "@chakra-ui/icons";
import { MdChatBubbleOutline } from "react-icons/md";
import { BiRadio } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { Pie, Bar } from "react-chartjs-2";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
  Box,
  HStack,
  Heading,
  Select,
  Icon,
  Container,
  Stack,
  VStack,
  Text,
  Tag,
} from "@chakra-ui/react";
import { AppContext } from "../contexts/App";

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
      <Box color={"green.400"} px={2}>
        <Icon as={CheckIcon} />
      </Box>
      <VStack align={"start"} width="100%">
        <Heading fontSize="xl" fontWeight={600} mb={6}>
          {title}
        </Heading>
        {/*
        <Text color={"gray.600"} pb={4}>
          {text}
        </Text>
        */}
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
      <Container maxW={"6xl"} my={10} py={10}>
        {country && (
          <Box align="center">
            <Heading
              color="#4c9f38"
              mb={10}
              size="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon mr={3} as={AiOutlineLineChart} />
              {getCountryName(country)}{" "}
            </Heading>
          </Box>
        )}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Episode
            title="Episode 1"
            text={
              <>This episode's question was about mango. De carne lumbering.</>
            }
          >
            <Chart1 />
          </Episode>
          <Episode
            title="Episode 2"
            text={
              <>This episode's question was about mango. De carne lumbering.</>
            }
          >
            <Chart2 />
          </Episode>
          <Episode
            title="Episode 3"
            text={
              <>This episode's question was about mango. De carne lumbering.</>
            }
          >
            <Chart3 />
          </Episode>
          {/*
          <Episode
            title="Summary"
            text={
              <>
                Zombie ipsum reversus ab viral inferno, nam rick grimes malum
                cerebro. De carne lumbering animata corpora quaeritis.
              </>
            }
          >
            <Box align="center" py={6}>
              <Button size="lg">Download the report</Button>
            </Box>
          </Episode>
          */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Results;
