import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    marginBottom: "2rem",
    padding: "15px",
    backgroundColor: "lightgrey" 

  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  mainContainer: {
    backgroundColor: "#fff",
    paddingBottom: "3px"
  },
}));
