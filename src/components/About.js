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

function About() {
  return (
    <Box position={"relative"} bg="#dfa400">
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
                color={"white"}
              >
                {"Listening to farmers"}
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                We asked small-scale farmers to tell us their thoughts and
                concerns about food systems
              </Heading>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
