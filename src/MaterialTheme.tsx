import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "10px",
          boxShadow: "0 0 5px 2px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: "#3342b5",
          color: "white",
        },
      },
    },
    // MuiDialogContent: {
    //   styleOverrides: {
    //     root: {
    //       paddingTop: "2rem",
    //     },
    //   },
    // },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          paddingBlock: "0.5rem",
        },
      },
    },
  },
});
