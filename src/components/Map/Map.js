import { GoogleMapProvider, InfoWindow, MapBox, Marker } from "@googlemap-react/core";
import React, { useState } from "react";

import Card from "components/Card/Card.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// core components





export default function SectionMap() {
  const [infoDisplay, setInfoDisplay] = useState(true);

  // Set handlers
  const handleClick = () => {
    setInfoDisplay(!infoDisplay);
  };

  const mapsApiKey = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <GoogleMapProvider>
            <MapBox
              apiKey={mapsApiKey}
              opts={{
                center: { lat: 42.133763, lng: -70.908446 },
                zoom: 11
              }}
              style={{
                height: "50vh",
                width: "100%"
              }}
              useDrawing
              useGeometry
              usePlaces
              useVisualization
            />
            <Marker
              id="marker"
              opts={{
                draggable: false,
                position: { lat: 42.133763, lng: -70.908446 }
              }}
              onClick={handleClick}
            />
            <InfoWindow
              anchorId="marker"
              visible={infoDisplay}
              onCloseClick={() => {
                setInfoDisplay();
              }}
            >
              <p>
                <b>EMEF</b>
                <br />
                98 Myrtle St. STE201B
                <br />
                Rockland, MA 02370
                <br />
                (617) 454-4347
                <br />
                <a
                  href="https://www.google.com/maps/place/98+Myrtle+St,+Rockland,+MA+02370/@42.1362377,-70.9169987,17z/data=!3m1!4b1!4m5!3m4!1s0x89e49c2cc1b17c03:0x8ab5849270017ea3!8m2!3d42.1362377!4d-70.91481"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View on Google Maps
                </a>
              </p>
            </InfoWindow>
          </GoogleMapProvider>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
