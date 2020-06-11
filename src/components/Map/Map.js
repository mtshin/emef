import React, { useState } from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import { GoogleMapProvider, InfoWindow, MapBox, Marker } from "@googlemap-react/core";

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
                379 Liberty St. STE 201A & 201C
                <br />
                Rockland, MA 02370
                <br />
                (617) 454-4347
                <br />
                <a
                  href="https://www.google.com/maps/place/379+Liberty+St+STE+201A+%26+201C,+Springfield,+MA+01104/@42.1136996,-72.5885111,17z/data=!3m1!4b1!4m5!3m4!1s0x89e6e719f2b7779d:0xe16b7949cebfcd2a!8m2!3d42.1136956!4d-72.5863224"
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
