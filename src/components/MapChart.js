import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Box } from "@chakra-ui/react";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function MapChart({ selectedCountry }) {
  return (
    <Box height={["780px", "780px", "580px", "580px"]}>
      <ComposableMap
        style={{
          background: "#dfa400",
          margin: "0 auto",
          width: "100%",
          height: "100%",
        }}
      >
        <ZoomableGroup center={[20, 0]} zoom={4}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      geo.properties.ISO_A2 === selectedCountry
                        ? "#00000060"
                        : !selectedCountry
                        ? "#b28328"
                        : "#b28328"
                    }
                    stroke="#dba030"
                    strokeWidth={0.3}
                  />
                );
              })
            }
          </Geographies>
          {!selectedCountry && (
            <>
              <Marker coordinates={[32.006, 2.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[33.006, 1.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[31.006, 0.3128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[35.006, -4.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[33.006, -3.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[30.006, -5.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[37.006, -8.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[-1.006, 8.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[-2.006, 9.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[-1.906, 5.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[-2.906, 12.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
              <Marker coordinates={[0.506, 11.7128]}>
                <circle r={1.5} fill="#5f4511" />
              </Marker>
            </>
          )}
        </ZoomableGroup>
      </ComposableMap>
    </Box>
  );
}

export default MapChart;
