import { Button, Grid2, Stack, TextField } from "@mui/material";

const PaymentRoute = () => {
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      sx={{ padding: 2 }}
    >
      <Grid2
        container
        spacing={2}
        sx={{
          bgcolor: "#FEFEFE",
          width: { xs: "80%", md: "80%" },
          maxWidth: "800px",
          padding: 2,
          borderRadius: 2,
          boxShadow: "0 0 10px 0px rgba(0,0,0,0.2)",
        }}
      >
        <Grid2 sx={{ width:'100%' }} container flexDirection={"row"} spacing={2}>
          <TextField fullWidth label="Name on Card" />

          <TextField fullWidth label="Card Number" />
        </Grid2>
        <Grid2 sx={{ width:'100%'}} container flexDirection={"row"} spacing={2}>
          <TextField fullWidth label="Exp. date" />

          <TextField fullWidth label="CVC" />
        </Grid2>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained">Submit</Button>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default PaymentRoute;
