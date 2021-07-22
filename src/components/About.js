import React, { useContext } from "react";
import {
  Img,
  Link,
  Box,
  Text,
  Heading,
  Container,
  Stack,
} from "@chakra-ui/react";
import photo4 from "../img/photo4.jpg";
import { AppContext } from "../contexts/App";

function About() {
  const { setAboutPageVisible } = useContext(AppContext);

  return (
    <>
      <Box bg="#dfa400">
        <Container maxW={"7xl"} zIndex={10} position={"relative"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 10, xl: 20 }}
            >
              <Box id="insights">
                <Heading
                  color={"white"}
                  mb={5}
                  fontSize={{ base: "3xl", md: "5xl" }}
                >
                  About the project
                </Heading>
                <Text
                  fontFamily={"heading"}
                  fontWeight={300}
                  mb={3}
                  fontSize={"2xl"}
                  color={"white"}
                >
                  Over the course of three weeks in June 2021, and in
                  partnership with IFAD, World Vision Canada, and the Food
                  Security Policy Group, Farm Radio International gathered
                  thousands of small-scale farmers’ and other rural peoples’
                  perspectives on how to create equitable, sustainable, and
                  productive food systems.
                </Text>
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  mb={3}
                  fontSize={"2xl"}
                  color={"white"}
                >
                  The goal: to bring farmers’ voices to the global conversation
                  about food systems to speak for themselves.
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container maxW={"7xl"} zIndex={10} py={10}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack mx={9} mb={9}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Img
                  src={photo4}
                  width="350px"
                  height="350px"
                  borderRadius="50%"
                  objectFit="cover"
                />
              </Box>
            </Stack>
            <Stack flex={1} justifyContent="center">
              <Box>
                <Text mb={3} fontSize="1.4em">
                  Radio is accessible, and reaches people everywhere. And with
                  mobile phones, it has even more power.
                </Text>
                <Text mb={3}>
                  We worked with six stations in Burkina Faso, Ghana, Tanzania,
                  and Uganda to create 18 original episodes of radio
                  programming, complete with mobile phone based listener
                  polling. On air, broadcasters invited local experts, farmers,
                  and guests to speak their mind and share their knowledge. Off
                  air, we engaged listeners to join in the discussion with their
                  own thoughts.
                </Text>
                <Text mb={3}>
                  We asked listeners: Which issues impact farmers most? How do
                  barriers and opportunities play out differently for female and
                  male farmers? What is the future of food systems? And what
                  needs to happen to make life better for farming families?
                </Text>
                <Text mb={3} fontWeight="bold">
                  To read the full results,{" "}
                  <Link
                    color="#01aed9"
                    onClick={() => {
                      setAboutPageVisible(false);
                    }}
                    href="#report"
                  >
                    download the report here
                  </Link>
                  . Or,{" "}
                  <Link
                    color="#01aed9"
                    onClick={() => {
                      setAboutPageVisible(false);
                    }}
                    href="#results"
                  >
                    click here
                  </Link>{" "}
                  to explore the results, and listen to the real voices of
                  farmers. <b>The report is coming soon!</b>
                </Text>
              </Box>
            </Stack>
          </Stack>
          <Stack direction={{ base: "column", lg: "row" }} mt={5}>
            <Stack flex={1}>
              <Heading size="xl">The 2021 UN Food Systems Summit</Heading>
              <Text mb={3}>
                This project takes place within the framework of the 2021 UN
                Food Systems Summit. Convened in 2021 by UN Secretary-General
                António Guterres, the UN Food Systems Summit brings together
                global actors from across sectors to engage in dialogue on all
                aspects of food systems. The aim of the Summit is to create
                tangible, positive food system transformation through the
                Sustainable Development Goals (SDGs).
              </Text>
              <Box py={8}>
                <Text mb={3} fontSize="3xl">
                  “The summit will only be effective at setting out the pathway
                  to 2030 if we successfully leverage the collective knowledge
                  and experience of the broadest possible cross-section of the
                  population.” - UN Special Envoy Dr. Agnes Kalibata
                </Text>
              </Box>
              <Box mb={6}>
                <Heading size="lg" mb={4}>
                  Acknowledgements
                </Heading>
                <Heading size="sm">Farm Radio International</Heading>
                <Text mb={3}>
                  Farm Radio International is a Canadian international
                  non-governmental organization uniquely focused on improving
                  the lives of rural Africans through the world’s most
                  accessible communications tool, radio, in combination with
                  ICTs.
                </Text>
                <Heading size="sm">
                  International Fund for Agriculture Development
                </Heading>
                <Text mb={3}>
                  IFAD is an international financial institution and a United
                  Nations specialized agency based in Rome – the United Nations
                  food and agriculture hub. IFAD invests in rural people,
                  empowering them to reduce poverty, increase food security,
                  improve nutrition and strengthen resilience.
                </Text>
                <Heading size="sm">World Vision Canada</Heading>
                <Text mb={3}>
                  World Vision Canada is a Christian relief, development and
                  advocacy organization working to create lasting change in the
                  lives of children, families and communities to overcome
                  poverty and injustice.
                </Text>
                <Heading size="sm">Canadian Food Security Policy Group</Heading>
                <Text mb={3}>
                  The Canadian Food Security Policy Group is a network of
                  Canadian development and humanitarian organizations with
                  expertise in global food systems, and food security in the
                  Global South.
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default About;
