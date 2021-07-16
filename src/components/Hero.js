import React from "react";
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

function Hero() {

  const onLoaded = (container) => {
    container.addClickHandler(() => {
      console.log("click");
    });
  };

  return (
    <>
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
    </>
  );
}

export default Hero;
