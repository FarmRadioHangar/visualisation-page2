import "react-tiny-fab/dist/styles.css";
import React, { useState, useRef } from "react";
import Particles from "react-tsparticles";
//import ReactAudioPlayer from "react-audio-player";
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
import { AiOutlinePlus } from "react-icons/ai";
import { Fab, Action } from "react-tiny-fab";

import { AiOutlineClose } from "react-icons/ai";
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Heading,
  SliderThumb,
  HStack,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";

function Hero() {
  const [audio, setAudio] = useState();
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef();

  const play = () => {
    //    playerRef.current.audioEl.current.play();
    setAudio("audio");
    setPlaying(true);
  };

  const pause = () => {
    console.log("pause");
    playerRef.current.audioEl.current.pause();
    setPlaying(false);
  };

  const toggleBubbleVisible = () => {
    setBubbleVisible(!bubbleVisible);
  };

  const onLoaded = (container) => {
    container.addClickHandler(() => {
      console.log("click");
    });
  };

  return (
    <>
      <Box
        onClick={() => {
          // if (!audio) play();
        }}
        bg={"#15760d"}
        position={"relative"}
        height={"100%"}
      >
        <Fab
          icon={<AiOutlinePlus size={32} />}
          style={{ position: "absolute", bottom: 10, left: 10 }}
          onClick={toggleBubbleVisible}
          mainButtonStyles={{
            background: "#dfa400",
            width: "70px",
            height: "70px",
          }}
        ></Fab>
        {bubbleVisible && (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              padding: "3em",
              bottom: "50px",
              left: "120px",
              borderRadius: "50%",
              width: "400px",
              height: "400px",
              background: "white",
              position: "absolute",
            }}
          >
            <Heading color={"#dfa400"} fontSize="3xl">
              We asked listeners to leave their feedback on the topic of food
              systems
            </Heading>
          </div>
        )}
        <Particles
          id="tsparticles"
          loaded={onLoaded}
          options={{
            background: {
              color: {
                value: "#15760d",
              },
            },
            pauseOnBlur: true,
            //              fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                //onClick: {
                //  enable: true,
                //  mode: "push",
                //},
                //onHover: {
                //  enable: true,
                //  mode: "grab",
                //},
                resize: true,
              },
              //modes: {
              //  bubble: {
              //    distance: 400,
              //    duration: 2,
              //    opacity: 0.8,
              //    size: 40,
              //  },
              //  push: {
              //    quantity: 4,
              //  },
              //  repulse: {
              //    distance: 200,
              //    duration: 0.4,
              //  },
              //},
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              //links: {
              //  color: "#ffffff",
              //  distance: 300,
              //  enable: true,
              //  opacity: 0.1,
              //  width: 1,
              //},
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
                value: 40,
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
              //opacity: {
              //  animation: {
              //    enable: true,
              //  },
              //},
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
            //              detectRetina: true,
          }}
        />
        {/*
        <ReactAudioPlayer ref={playerRef} src={audioFile} autoPlay={true} />
        {audio && (
          <div
            style={{
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <Box width={["100%", "100%", "600px", "600px"]}>
              <div
                style={{
                  borderRadius: "0.5em",
                  width: "100%",
                  background: "#11111198",
                  color: "white",
                  padding: "2em 2.5em",
                  position: "relative",
                }}
              >
                <div style={{ position: "absolute", right: 24, top: 22 }}>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      pause();
                      setAudio(null);
                    }}
                  >
                    <AiOutlineClose color="white" size={20} />
                  </a>
                </div>
                <HStack p={0} w="100%" justifyContent="center">
                  <Box mx={4}>
                    {playing ? (
                      <FiPauseCircle
                        onClick={(e) => {
                          e.stopPropagation();
                          pause();
                        }}
                        cursor="pointer"
                        size={92}
                        color="white"
                      />
                    ) : (
                      <FiPlayCircle
                        onClick={play}
                        cursor="pointer"
                        size={92}
                        color="white"
                      />
                    )}
                  </Box>
                </HStack>
                <Box mx={0} my={5}>
                  <Slider aria-label="slider-ex-1" defaultValue={0}>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Box>
                <>
                  <Box align="left">
                    <VStack>
                      <Box my>
                        <Heading size="sm" my={3}>
                          Transcription:
                        </Heading>
                        <Text>
                          On air dialogues ipsum reversus ab viral inferno, nam
                          rick grimes malum cerebro. De carne lumbering animata
                          corpora quaeritis.
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </>
              </div>
            </Box>
          </div>
        )}
        */}
        {/*
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 0.8,
                out_mode: "out",
              },
              shape: {
                type: ["image", "circle"],
                image: [
                  {
                    src: fssIcon1,
                    size: 400,
                  },
                  {
                    src: fssIcon2,
                    size: 400,
                  },
                  {
                    src: fssIcon3,
                    size: 400,
                  },
                  {
                    src: fssIcon4,
                    size: 400,
                  },
                  {
                    src: fssIcon5,
                    size: 400,
                  },
                  {
                    src: fssIcon6,
                    size: 400,
                  },
                  {
                    src: fssIcon7,
                    size: 400,
                  },
                  {
                    src: fssIcon8,
                    size: 400,
                  },
                  {
                    src: fssIcon11,
                    size: 400,
                  },
                ],
              },
              size: {
                value: 100,
                random: true,
                anim: {
                  enable: true,
                  speed: 8,
                  size_min: 8,
                  sync: false,
                },
              },
            },
            retina_detect: false,
          }}
        />
        */}
      </Box>
    </>
  );
}

export default Hero;
