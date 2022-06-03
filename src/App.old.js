import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  // theme kullanımı için
  // const OrangeButton = styled(Button)(({ theme }) => ({
  //   backgroundColor: "tomato",
  //   color: "blue",
  //   margin: 5,
  //   "&:hover": {
  //     // backgroundColor: "green",
  //     backgroundColor: theme.palette.otherColor.main,
  //     color: "white",
  //   },
  //   "&:disabled": {
  //     backgroundColor: "gray",
  //     color: "black",
  //   },
  // }));
  const OrangeButton = styled(Button)(({ theme }) => ({
    backgroundColor: "tomato",
    color: "blue",
    margin: 5,
    "&:hover": {
      backgroundColor: "green",
      // backgroundColor: theme.palette.otherColor.main,
      color: "white",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "black",
    },
  }));
  return (
    <div>
      <Button
        variant="contained"
        startIcon={<Add />}
        color="success"
        size="small"
      >
        add new post
      </Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary">
        Contained
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, esse.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "tomato",
          color: "blue",
          margin: 5,
          "&:hover": {
            backgroundColor: "white",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "black",
          },
        }}
      >
        unique button
      </Button>
      <OrangeButton>kendi yaptığım buton</OrangeButton>
    </div>
  );
}

export default App;
