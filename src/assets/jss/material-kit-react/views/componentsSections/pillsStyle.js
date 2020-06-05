import { container, title } from "assets/jss/material-kit-react.js";

const pillsStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  courseDetails: {
    color: "#999",
    display: "flex",
    justifyContent: "left"
  },
  courseTitle: {
    fontWeight: "bold"
  }
};

export default pillsStyle;
