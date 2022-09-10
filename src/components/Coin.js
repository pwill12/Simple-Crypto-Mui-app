import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
    marginTop: '14px'
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));


function Banner() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Price Checker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontSize: '21px'
            }}
          >
            Search and get Crypto Price and their Stats
          </Typography>
        </div>
      </Container>
      </div>
  );
}

export default Banner;
