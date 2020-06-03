import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  spacing: {
    paddingTop: "3rem",
    paddingBottom: "3rem"
  }
}));

// eslint-disable-next-line react/prop-types
export default function ResponsiveGallery({ photos }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const classes = useStyles();
  return (
    <div className={classes.spacing}>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              // eslint-disable-next-line react/prop-types
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
