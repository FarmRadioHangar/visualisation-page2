import React, { useState, useRef } from "react";
import Particles from "react-tsparticles";
import ReactAudioPlayer from "react-audio-player";
import Spinner from "react-spinkit";
import audioFile from "../audio/test.mp3";
import fssIcon1 from "../img/icons/fss_icon_1.png";
import fssIcon11 from "../img/icons/fss_icon_11.png";
import fssIcon2 from "../img/icons/fss_icon_2.png";
import fssIcon3 from "../img/icons/fss_icon_3.png";
import fssIcon4 from "../img/icons/fss_icon_4.png";
import fssIcon5 from "../img/icons/fss_icon_5.png";
import fssIcon6 from "../img/icons/fss_icon_6.png";
import fssIcon7 from "../img/icons/fss_icon_7.png";
import fssIcon8 from "../img/icons/fss_icon_8.png";
import { AiOutlineFolderOpen, AiOutlineClose } from "react-icons/ai";
import { BiPlay, BiPause } from "react-icons/bi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { IconButton, Box, Heading, Text } from "@chakra-ui/react";

function Hero() {
  const [overlayExpanded, setOverlayExpanded] = useState(true);
  const [audioSrc, setAudioSrc] = useState();
  const [playing, setPlaying] = useState(false);

  const playerRef = useRef();

  const audioApi = () => {
    return playerRef.current.audioEl.current;
  };

  const onLoaded = (container) => {
    container.addClickHandler((e, ps) => {
      setAudioSrc(audioFile);
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
          boxShadow="0 4px 5px #888888"
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
                    <Text fontSize="10.5pt" py={3} color="gray">
                      We asked listeners to leave their feedback on the topic of
                      food systems And here is the result. This allows you to
                      monitor your crops and get complete insights at real time.
                      The proprietary software/hardware ecosystem prevents your
                      plants from getting neglected.
                    </Text>
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
              pauseOnBlur: true,
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
