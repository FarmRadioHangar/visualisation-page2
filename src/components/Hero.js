import React, { useState, useRef } from "react";
import Particles from "react-tsparticles";
import ReactAudioPlayer from "react-audio-player";
import Spinner from "react-spinkit";
import fssIcon1 from "../img/icons/fss_icon_1.png";
import fssIcon11 from "../img/icons/fss_icon_11.png";
import fssIcon2 from "../img/icons/fss_icon_2.png";
import fssIcon3 from "../img/icons/fss_icon_3.png";
import fssIcon4 from "../img/icons/fss_icon_4.png";
import fssIcon5 from "../img/icons/fss_icon_5.png";
import fssIcon6 from "../img/icons/fss_icon_6.png";
import fssIcon7 from "../img/icons/fss_icon_7.png";
import fssIcon8 from "../img/icons/fss_icon_8.png";
import resultsBf from "../data/bf.json";
import resultsEt from "../data/et.json";
import {
  AiOutlineArrowUp,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";
import Header from "./Header";
import { BiPlay, BiPause } from "react-icons/bi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { Link, VStack, IconButton, Box, Heading, Text, Container, SimpleGrid, Button } from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import hero from "../img/Hero.jpg"
import lbg from "../img/layoutBG.png"

// import africaIcon from "../img/africa.png";
// import radioIcon from "../img/radio.png";
// import scriptIcon from "../img/script.png";
// import loveIcon from "../img/love.png";
// import conversationIcon from "../img/conversation.png";
// import questionIcon from "../img/question.png";
// import photo1 from "../img/photo1.jpg";
// import photo2 from "../img/photo2.jpg";
// import hero from "../img/Hero.jpg"
// import lbg from "../img/layoutBG.png"
// import photo3 from "../img/Adosante.jpg";
// import { AppContext } from "../contexts/App";
// import { Trans, useTranslation } from "react-i18next";

function Hero() {
  const [overlayExpanded, setOverlayExpanded] = useState(true);
  const [audioSrc, setAudioSrc] = useState();
  const [responseInfo, setResponseInfo] = useState();
  const [transcriptionLang, setTranscriptionLang] = useState("en");
  const [playing, setPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const { t } = useTranslation();

  const playerRef = useRef();

  const audioApi = () => {
    return playerRef.current.audioEl.current;
  };

  const handleClick = () => {
    const getResultsSet = () => {
      switch (Math.floor(2 * Math.random())) {
        case 0:
          return resultsBf;
        case 1:
        default:
          return resultsEt;
      }
    };

    const getResponse = () => {
      const results = getResultsSet();
      return results[Math.floor(results.length * Math.random())];
    };

    const response = getResponse();

    setAudioSrc(`${process.env.PUBLIC_URL}/audio/${response.ID}.wav`);

    setResponseInfo({
      transcription_en: response["Transcription (ENG)"],
      transcription_fr: response["Transcription (FR)"],
      question_en: response["Corresponding Uliza poll question"],
      question_fr: response["Corresponding Uliza poll question (FR)"],
    });

    setCanPlay(false);
    audioApi().load();
    setPlaying(true);
  };

  const onLoaded = (container) => {
    container.addClickHandler(handleClick);
  };

  const toggleOverlayExpanded = () => {
    setOverlayExpanded(!overlayExpanded);
  };

  const pause = () => {
    audioApi().pause();
    setPlaying(false);
  };

  const play = () => {
    audioApi().play();
    setPlaying(true);
  };

  const handlePlaybackEnded = () => {
    setAudioSrc(null);
    setPlaying(false);
  };

  return (
    <>
      {audioSrc && (
        <IconButton
          icon={playing ? <BiPause size={32} /> : <BiPlay size={32} />}
          color="white"
          cursor="pointer"
          bottom="40px"
          right="40px"
          width="70px"
          height="70px"
          position="fixed"
          zIndex={4000}
          borderRadius="50%"
          background="rgb(239 65 42)"
          onClick={playing ? pause : play}
          boxShadow="0 4px 10px #00000050"
          _hover={{
            background: "rgb(239 65 42)",
          }}
        />
      )}
      <Box>
        <ReactAudioPlayer
          ref={playerRef}
          src={audioSrc}
          autoPlay={true}
          onEnded={handlePlaybackEnded}
          onError={(err) => {
            console.log(err);
          }}
          onCanPlay={() => {
            setCanPlay(true);
          }}
        />
        {audioSrc && playing && (
          <>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="left"
              bg="#121212"
              px={3}
              color="#f8f8f8"
              minHeight="52px"
              fontSize="pt"
            >
              {playing && (
                <>
                  <Box mx={3} h="100%">
                    {canPlay ? (
                      <Spinner
                        fadeIn="none"
                        color="white"
                        name="line-scale-pulse-out"
                        style={{
                          width: "40px",
                          height: "100%",
                          marginTop: "6px",
                        }}
                      />
                    ) : (
                      <Spinner
                        fadeIn="none"
                        color="white"
                        name="three-bounce"
                        style={{
                          width: "40px",
                          height: "100%",
                          marginTop: "6px",
                        }}
                      />
                    )}
                  </Box>
                  <Box mx={2}>
                    {responseInfo && (
                      <>
                        <VStack spacing={0} align="left">
                          <Box fontSize="0.7em" py={3}>
                            <Link
                              color={
                                transcriptionLang === "en" ? "white" : "grey"
                              }
                              mr={2}
                              onClick={() => {
                                setTranscriptionLang("en");
                              }}
                            >
                              EN
                            </Link>
                            <Link
                              color={
                                transcriptionLang === "fr" ? "white" : "grey"
                              }
                              onClick={() => {
                                setTranscriptionLang("fr");
                              }}
                            >
                              FR
                            </Link>
                          </Box>
                          <Box>
                            {transcriptionLang === "en" ? (
                              <>
                                <Text fontSize="10.5pt" pb={3} color="gray">
                                  <b>Question:</b>
                                  <br />
                                  {responseInfo.question_en}
                                </Text>
                                <Text
                                  fontSize="10.5pt"
                                  pb={3}
                                  color="white.700"
                                >
                                  {responseInfo.transcription_en}
                                </Text>
                              </>
                            ) : (
                              <>
                                <Text fontSize="10.5pt" pb={3} color="gray">
                                  <b>Question:</b>
                                  <br />
                                  {responseInfo.question_fr}
                                </Text>
                                <Text
                                  fontSize="10.5pt"
                                  pb={3}
                                  color="white.700"
                                >
                                  {responseInfo.transcription_fr}
                                </Text>
                              </>
                            )}
                          </Box>
                        </VStack>
                      </>
                    )}
                  </Box>
                </>
              )}
            </Box>
          </>
        )}
        {/* <Box position="relative">
          <Box
            color="white"
            h={{ base: overlayExpanded ? "60%" : "60px", md: "100%" }}
            w={{ base: "100%", md: overlayExpanded ? "400px" : "60px" }}
            bottom={0}
            background="#000000a0"
            position="absolute"
            display="flex"
            zIndex={1000}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            align="center"
            px={overlayExpanded ? 10 : 0}
            onClick={overlayExpanded ? () => {} : toggleOverlayExpanded}
            cursor={overlayExpanded ? "default" : "pointer"}
          >
            <Box
              onClick={toggleOverlayExpanded}
              cursor="pointer"
              position={overlayExpanded ? "absolute" : "auto"}
              right={overlayExpanded ? 4 : "auto"}
              top={overlayExpanded ? 4 : "auto"}
            >
              {overlayExpanded ? (
                <AiOutlineClose size={25} />
              ) : (
                <>
                  <Box d={{ base: "none", md: "block" }}>
                    <AiOutlineArrowRight size={25} />
                  </Box>
                  <Box d={{ base: "block", md: "none" }}>
                    <AiOutlineArrowUp size={25} />
                  </Box>
                </>
              )}
            </Box>
            {overlayExpanded && (
              <>
                <Box mb={3} w={{ base: "60px", md: "80px", lg: "120px" }}>
                  <HiOutlineCursorClick size="100%" />
                </Box>
                <Heading mb={2}>{t("Listening to Rural People 2022")}</Heading>
                <Text mb={3}>{t("HERO_INTRO_1")}</Text>
                <Text>{t("HERO_INTRO_2")}</Text>
              </>
            )}
          </Box>
          
          <div
            onClick={handleClick}
            style={{ height: "500px", width: "100%", overflow: "hidden" }}
          >
            <Particles
              loaded={onLoaded}
              options={{
                fullScreen: {
                  enable: true,
                  zIndex: -1,
                },
                background: {
                  color: {
                    value: "#15760d",
                  },
                },
                pauseOnBlur: false,
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  collisions: {
                    enable: false,
                  },
                  move: {
                    enable: true,
                    speed: 1.5,
                    straight: false,
                  },
                  number: {
                    value: 30,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: ["circle", "image"],
                    image: [
                      {
                        src: fssIcon1,
                      },
                      {
                        src: fssIcon2,
                      },
                      {
                        src: fssIcon3,
                      },
                      {
                        src: fssIcon4,
                      },
                      {
                        src: fssIcon5,
                      },
                      {
                        src: fssIcon6,
                      },
                      {
                        src: fssIcon7,
                      },
                      {
                        src: fssIcon8,
                      },
                      {
                        src: fssIcon11,
                      },
                    ],
                  },
                  size: {
                    random: true,
                    value: 75,
                    animation: {
                      enable: true,
                    },
                  },
                },
              }}
            />
          </div>
        </Box> */}


                <Box
                  bg={`linear-gradient(0deg, rgb(0 0 0 / 52%), rgb(76 159 56 / 0%)),url(${hero})`}
                  backgroundSize="cover"
                  backgroundPosition="center top"
                  color={"white"}
                  verticalAlign="center"
                  minHeight="800px"
                  pb={100}
                  
                >
                
                <Container maxW={"8xl"} zIndex={10} position={"relative"} mb={35}>
                  <Header  bg={"transparent"} mb={20}/>
                  <SimpleGrid columns={3} spacing={1} minHeight="500px" alignItems={"center"}>
                    
                    <Box>
                      <Heading mb={2} fontFamily="BebasB" fontSize={"90px"} lineHeight={"95px"} fontWeight={"400"} textTransform={"Uppercase"}>
                        {t("Listening to Rural People 2022")}
                      </Heading>
                      <Text mb={3}>{t("HERO_INTRO_1")}</Text>
                      <Button
                          onClick={handleClick}
                          px={8}
                          py={8}
                          mt={2}
                          size="md"
                          color="white"
                          bg="#4c9f38"
                          border={"1px solid #4c9f38"}
                          _hover={{ bg: "transparent", border:"1px solid #fff" }}
                        >
                          {t("Click to listen to their voices")}
                      </Button>
                      <Text fontSize={"xs"} textAlign="left" pt={-1}> Click repeatedly to shuffle playbacks</Text>
                    </Box>

                    <Box  height='80px'>
                      
                    </Box>
                    <Box  height='80px'>
                      
                    </Box>
                    
                  </SimpleGrid>
                </Container> 
                </Box>

                <Box
                  // bg={useColorModeValue("gray.100", "gray.900")}
                  // color={useColorModeValue("gray.700", "gray.200")}
                  bg={`url(${lbg})`} backgroundSize="contain"
                  mt="-75px"
                  color="white"
                  fontFamily={"BebasR"}
                  textTransform={"Uppercase"}
                >
                <Container maxW={"8xl"} zIndex={10} position={"relative"} bg='#4c9f38' borderRadius="5px" >
                  <SimpleGrid columns={6} spacing={0} minHeight='150px' py="15">
                    <Box  borderRight="1px solid #fff" textAlign="center" > 
                        <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"}>2</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}> Countries</Text>
                        </Trans>
                    </Box>
                    <Box borderRight="1px solid #fff"  textAlign="center" >
                      <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"}>7</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}>Radio Stations</Text>
                        </Trans>
                    </Box>
                    <Box borderRight="1px solid #fff"  textAlign="center" >
                        <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"} letterSpacing={2}>21</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}>Original Episodes</Text>
                        </Trans>
                    </Box>
                    <Box borderRight="1px solid #fff"  textAlign="center" >
                        <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"} letterSpacing={2}>14,356</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}>Respondents</Text>
                        </Trans>
                    </Box>
                    <Box borderRight="1px solid #fff"  textAlign="center" >
                        <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"} letterSpacing={2}>122,529</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}>Poll Responses</Text>
                        </Trans>
                    </Box>
                    <Box textAlign="center" >
                        <Text fontSize={"70px"} lineHeight={"85px"} fontWeight={"600"} letterSpacing={2}>9,317</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"30px"} lineHeight={"30px"}>Audio Comments</Text>
                        </Trans>
                    </Box>
                  </SimpleGrid>
                </Container> 
                </Box>

      </Box>
    </>
  );
}

export default Hero;
