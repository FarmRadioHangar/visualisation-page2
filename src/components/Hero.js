import React, { useState } from "react";
import Particles from "react-tsparticles";
import fssIcon1 from "../img/icons/fss_icon_1.png";
import fssIcon11 from "../img/icons/fss_icon_11.png";
import fssIcon2 from "../img/icons/fss_icon_2.png";
import fssIcon3 from "../img/icons/fss_icon_3.png";
import fssIcon4 from "../img/icons/fss_icon_4.png";
import fssIcon5 from "../img/icons/fss_icon_5.png";
import fssIcon6 from "../img/icons/fss_icon_6.png";
import fssIcon7 from "../img/icons/fss_icon_7.png";
import fssIcon8 from "../img/icons/fss_icon_8.png";
import { HiOutlineCursorClick } from "react-icons/hi";
import { AiOutlineFolderOpen, AiOutlineClose } from "react-icons/ai";
import { Box, Heading, Text } from "@chakra-ui/react";

function Hero() {
  const [overlayExpanded, setOverlayExpanded] = useState(true);

  const onLoaded = (container) => {
    container.addClickHandler(() => {
      console.log("click");
    });
  };

  const toggleOverlayExpanded = () => {
    setOverlayExpanded(!overlayExpanded);
  };

  return (
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
        id="tsparticles"
        loaded={onLoaded}
        options={{
          background: {
            color: {
              value: "#15760d",
            },
          },
          pauseOnBlur: true,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
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
  );
}

export default Hero;
