import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    maxWidth: "auto",
    borderRadius: 4,
    marginTop: "15px",
    padding: "15px",
    backgroundColor: "lightgrey",
    opacity: "0.9",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  mainContainer: {
    backgroundColor: "transparent",
    paddingBottom: "3px",
  },
}));
