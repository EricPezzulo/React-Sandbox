import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DialogComponent from "../common/Dialog";

const ChildRouteContent = () => {
  return (
    <Grid container alignItems={"center"} justifyContent={"center"}>
      <Grid container spacing={2}>
        <Grid sx={{ bgcolor: "lightpink", p: 2 }}>
          <Button variant="outlined">Component 1</Button>
        </Grid>
        <Grid sx={{ bgcolor: "lightgreen", p: 2 }}>
          <Button variant="outlined">Component 2</Button>
        </Grid>
        <Grid sx={{ bgcolor: "lightblue", p: 2 }}>
          <Button variant="text">Component 3</Button>
        </Grid>{" "}
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <DialogComponent />
        </Grid>
        <Grid>
          <Typography>Test</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChildRouteContent;
