import React from "react";
import {
  SimpleGrid,
  Box,
  Text,
  Img,
  Heading,
  Container,
  Stack,
} from "@chakra-ui/react";
import particlesAnimation from "../img/9958-particle-explosion.gif";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function StatsText({ children }) {
  return (
    <Text as={"span"} fontWeight={700} color={"gray.800"}>
      {children}
    </Text>
  );
}

function SummaryItem({ heading, text, children }) {
  return (
    <Box mt={5} p={8}>
      {children}
      <Text fontFamily={"heading"} fontSize={"5xl"} mb={3}>
        {heading}
      </Text>
      <Text fontSize={"xl"} color={"gray.800"}>
        {text}
      </Text>
    </Box>
  );
}

function Summary() {
  return (
    <Box position={"relative"}>
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
                {"Voices from listeners"}
              </Text>
              <Heading
                color={"#dfa400"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                We asked listeners to leave their feedback on the topic of food
                systems
              </Heading>
              <Text fontSize={"xl"} color={"gray.800"}>
                And here is the result. This allows you to monitor your crops
                and get complete insights at real time. The proprietary
                software/hardware ecosystem prevents your plants from getting
                neglected.
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <SummaryItem
                  heading={"1,275"}
                  text={
                    <>
                      <StatsText>Interactive voice surveys</StatsText> completed
                      in 5 days in Ghana
                    </>
                  }
                >
                  <Box height="200px" py={6}>
                    <Line
                      data={{
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                        datasets: [
                          {
                            data: [12, 19, 3, 5, 7],
                            fill: false,
                            backgroundColor: "#fdb714",
                            borderColor: "#4c9f38",
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false,
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
                              drawBorder: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                        },
                      }}
                    />
                  </Box>
                </SummaryItem>
                <SummaryItem
                  heading={"???"}
                  text={
                    <>
                      <StatsText>Female and male farmers engaged</StatsText> in
                      Burkina Faso, Ghana, Tanzania, and Uganda
                    </>
                  }
                >
                  <Box height="200px" maxWidth="200px" py={6}>
                    <Doughnut
                      data={{
                        labels: [
                          "Red",
                          "Blue",
                          "Yellow",
                          "Green",
                          "Purple",
                          "Orange",
                        ],
                        datasets: [
                          {
                            borderWidth: 0,
                            label: "# of Votes",
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: ["#347cb7", "#ef412a", "#fdb714"],
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                      }}
                    />
                  </Box>
                </SummaryItem>
                <SummaryItem
                  heading={"24"}
                  text={
                    <>
                      <StatsText>WhatsApp groups</StatsText> created in Kiribati
                      today
                    </>
                  }
                >
                  <Box>
                    <Img src={particlesAnimation} height={300} />
                  </Box>
                </SummaryItem>
                <SummaryItem
                  heading={"204,150"}
                  text={
                    <>
                      <StatsText>SMS surveys</StatsText> conducted in 1 month in
                      Uganda
                    </>
                  }
                >
                  <Box height="300px" py={6}>
                    <Bar
                      data={{
                        labels: [
                          "Week 1",
                          "Week 2",
                          "Week 3",
                          "Week 4",
                          "Week 5",
                          "Week 6",
                          "Week 7",
                        ],
                        datasets: [
                          {
                            label: "My First Dataset",
                            data: [65, 59, 80, 81, 56, 55, 40],
                            backgroundColor: [
                              "#4c9f38",
                              "#01558b",
                              "#fdb714",
                              "#862539",
                              "#01add8",
                              "#ef412a",
                              "#D2a02a",
                            ],
                            borderColor: [
                              "#4c9f38",
                              "#01558b",
                              "#fdb714",
                              "#862539",
                              "#01add8",
                              "#ef412a",
                              "#d2A02A",
                            ],
                            borderWidth: 1,
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false,
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
                              drawBorder: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                        },
                      }}
                    />
                  </Box>
                </SummaryItem>
              </SimpleGrid>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Summary;
