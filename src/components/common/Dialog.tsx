import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid2";
import { Divider, Typography } from "@mui/material";
import { LOREM } from "../../mock/db.ts";

export default function DialogComponent({
  title = "Title",
  description = "Description",
  content = LOREM,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid>
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <Divider orientation="horizontal" />
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {description}
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{
                maxHeight: "500px",
              }}
            >
              <Typography variant="subtitle2">{content}</Typography>
            </DialogContentText>
          </DialogContent>
          <Divider orientation="horizontal" sx={{ width: "100%" }} />
          <DialogActions>
            <Button
              sx={{ bgcolor: "#3342b5", color: "#FFFFFF" }}
              onClick={handleClose}
            >
              Disagree
            </Button>
            <Button
              sx={{ bgcolor: "#3342b5", color: "#FFFFFF" }}
              onClick={handleClose}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}
