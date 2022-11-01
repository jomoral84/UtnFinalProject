import { makeStyles } from "@material-ui/core/styles";
import Jaipur from "../../../img/Jaipur.jpg";

export default makeStyles((theme) => ({
  media: {
    backgroundColor: "lightgrey",
    width: "400px",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    width: "auto",
    backgroundImage: `url(${Jaipur})`,
  
  },
  overlay: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "20px",
    left: "20px",
    color: "white",
  },

  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
}));
