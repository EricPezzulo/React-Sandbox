import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DialogComponent from "../common/Dialog";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppState";

const ChildRouteContent = () => {
  const { regions } = useContext(AppContext);
  console.log(regions);
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
      </Grid>
      {regions.map((r, i) => (
        <div
          className="m-2 rounded bg-slate-100 p-2 text-center font-inter"
          key={i}
        >
          <p>{r.displayName}</p>
          <p>{r.nameserver}</p>
        </div>
      ))}
    </Grid>
  );
};

export default ChildRouteContent;
