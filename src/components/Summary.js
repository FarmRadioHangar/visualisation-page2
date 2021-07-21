import React from "react";
import {
  SimpleGrid,
  Box,
  Text,
  Img,
  Heading,
  Container,
  Tag,
  Stack,
} from "@chakra-ui/react";
import particlesAnimation from "../img/9958-particle-explosion.gif";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import radioIcon from "../img/radio.png";
import scriptIcon from "../img/script.png";
import loveIcon from "../img/love.png";
import conversationIcon from "../img/conversation.png";
import questionIcon from "../img/question.png";
import photo1 from "../img/photo1.jpg";
import photo2 from "../img/photo2.jpg";
import photo3 from "../img/photo3.jpg";

function StatsText({ children }) {
  return (
    <Text as={"span"} fontWeight={700} color={"gray.800"}>
      {children}
    </Text>
  );
}

function SummaryItem({ heading, text, children }) {
  return (
    <Box mt={5} p={3}>
      {children}
      <Tag bg="#4c9f38" color="white" fontFamily={"heading"} fontSize={"5xl"} mb={3}>
        {heading}
      </Tag>
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
                {"Listening to farmers"}
              </Text>
              <Heading
                color={"#dfa400"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                We asked small-scale farmers to tell us their thoughts and concerns about food systems
              </Heading>
              <Text fontSize={"xl"} color={"gray.800"} color={"#dfa400"}>
                Nearly 3,500 people in Burkina Faso, Ghana, Tanzania, and Uganda called in to express their perspectives, concerns, and experiences in 2,600+ audio messages. Here’s what they had to say.
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10} py={5}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Img src={photo2} width="400px" height="400px" borderRadius="50%" objectFit="cover" />
                </Box>
                <Box display="flex" alignItems="center" px={10}>
                  <Text fontSize="1.7em" color="gray">
                    <b>Respondents overwhelmingly predicted</b> a future in farming for their children. Only one in ten people felt today’s youth should choose another occupation.
                  </Text>
                </Box>
              </SimpleGrid>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={5}>
                <Box display="flex" alignItems="center" px={10}>
                  <Text fontSize="1.7em" color="gray">
                    <b>Almost 75% of respondents</b> reported having concerns about the safety and quality of the food that is available to their families.
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Img src={photo1} width="400px" height="400px" borderRadius="50%" objectFit="cover" />
                </Box>
              </SimpleGrid>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10} py={5}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Img src={photo3} width="400px" height="400px" borderRadius="50%" objectFit="cover" />
                </Box>
                <Box display="flex" alignItems="center" px={10}>
                  <Text fontSize="1.7em" color="gray">
                    <b>Over 90% of callers felt there was something</b> they could do in their community to cope with climate change.
                  </Text>
                </Box>
              </SimpleGrid>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 5 }} spacing={10}>
                <SummaryItem
                  heading={"6"}
                  text={
                    <>
                      <StatsText>Radio stations</StatsText> in four countries
                    </>
                  }
                >
                  <Box height="180px" py={6} justifyContent="center" alignItems="center" d="flex">
                    <Img src={radioIcon} height="130px" mb={5} />
                  </Box>
                </SummaryItem>
                <SummaryItem
                  heading={"18"}
                  text={
                    <>
                      <StatsText>Original</StatsText>  episodes
                    </>
                  }
                >
                  <Box height="180px" py={6} justifyContent="center" alignItems="center" d="flex">
                    <Img src={scriptIcon} height="130px" />
                  </Box>
                </SummaryItem>
                <SummaryItem
                  heading={"3,494"}
                  text={
                    <>
                      <StatsText>Respondents</StatsText> 
                    </>
                  }
                >
                  <Box height="180px" py={6} justifyContent="center" alignItems="center" d="flex">
                    <Img src={questionIcon} height="130px" />
                  </Box>
                </SummaryItem>
                <SummaryItem
                  heading={"11,854"}
                  text={
                    <>
                      <StatsText>Answered</StatsText>  questions
                    </>
                  }
                >
                  <Box height="180px" py={6} justifyContent="center" alignItems="center" d="flex">
                    <Img src={conversationIcon} height="130px" />
                  </Box>
                </SummaryItem>
                <SummaryItem
                  heading={"2,648"}
                  text={
                    <>
                      <StatsText>Audio comments</StatsText> captured
                    </>
                  }
                >
                  <Box height="180px" py={6} justifyContent="center" alignItems="center" d="flex">
                    <Img src={loveIcon} height="130px" />
                  </Box>
                </SummaryItem>
              </SimpleGrid>
              <Box align="center">
                <Text color="gray" fontSize="12px">
                  Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </Text>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Summary;
