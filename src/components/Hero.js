import React, { useState, useRef } from "react";
import Particles from "react-tsparticles";
import ReactAudioPlayer from "react-audio-player";
import Spinner from "react-spinkit";
//import audioFile from "../audio/test.mp3";
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
import resultsGh from "../data/gh.json";
import resultsTz from "../data/tz.json";
import resultsUg from "../data/ug.json";
import { AiOutlineFolderOpen, AiOutlineClose } from "react-icons/ai";
import { BiPlay, BiPause } from "react-icons/bi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { Link, VStack, IconButton, Box, Heading, Text } from "@chakra-ui/react";

function Hero() {
  const [overlayExpanded, setOverlayExpanded] = useState(true);
  const [audioSrc, setAudioSrc] = useState();
  const [responseInfo, setResponseInfo] = useState();
  const [transcriptionLang, setTranscriptionLang] = useState("en");
  const [playing, setPlaying] = useState(false);

  const playerRef = useRef();

  const audioApi = () => {
    return playerRef.current.audioEl.current;
  };

  const onLoaded = (container) => {
    container.addClickHandler((e, ps) => {
      const getResultsSet = () => {
        switch (Math.floor(4 * Math.random())) {
          case 0:
            return resultsBf;
          case 1:
            return resultsGh;
          case 2:
            return resultsTz;
          case 3:
          default:
            return resultsUg;
        }
      };

      const getResponse = () => {
        const results = getResultsSet();
        return results[Math.floor(results.length * Math.random())];
      };

      const response = getResponse();
      console.log(response);

      setAudioSrc(`${process.env.PUBLIC_URL}/audio/${response.ID}.wav`);
      //setAudioSrc(`${process.env.PUBLIC_URL}/audio/TZEP2010.wav`);

      //      setAudioSrc(process.env.PUBLIC_URL + '/audio/001.wav');

      setResponseInfo({
        transcription_en: response["Transcription (ENG)"],
        transcription_fr: response["Transcription (FR)"],
      });

      audioApi().load();
      setPlaying(true);
    });
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

  console.log(process.env.PUBLIC_URL);

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
          zIndex={1000}
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
                  </Box>
                  <Box mx={2}>
                    {responseInfo && (
                      <>
                        <VStack spacing={0} align="left">
                          <Box fontSize="0.7em" py={3}>
                            <Link
                              color={
                                transcriptionLang === "en" ? "gray" : "white"
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
                                transcriptionLang === "fr" ? "gray" : "white"
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
                              <Text fontSize="10.5pt" pb={3} color="gray">
                                {responseInfo.transcription_en}
                              </Text>
                            ) : (
                              <Text fontSize="10.5pt" pb={3} color="gray">
                                {responseInfo.transcription_fr}
                              </Text>
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
        <Box position="relative">
          <Box
            color="white"
            h={{ base: overlayExpanded ? "40%" : "60px", md: "100%" }}
            w={{ base: "100%", md: overlayExpanded ? "400px" : "60px" }}
            bottom={0}
            background="#000000a0"
            position="absolute"
            display="flex"
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
                <AiOutlineFolderOpen size={25} />
              )}
            </Box>
            {overlayExpanded && (
              <>
                <Box mb={3} w={{ base: "60px", md: "80px", lg: "120px" }}>
                  <HiOutlineCursorClick size="100%" />
                </Box>
                <Heading mb={2}>Voices of farmers</Heading>
                <Text>
                  Click on the bubbles and icons to listen to farmers voices.
                </Text>
              </>
            )}
          </Box>
          <Particles
            height="500px"
            loaded={onLoaded}
            options={{
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
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: true,
                  speed: 1.5,
                  straight: false,
                  attract: {
                    enable: true,
                  },
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
                rotate: {
                  random: true,
                  animation: {
                    enable: true,
                  },
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
        </Box>
      </Box>
    </>
  );
}

export default Hero;
