import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { dialogOpen } from "../features/dialog/dialogSlice";

const ImageDialog = () => {
  const open = useSelector((state) => state.dialog.open);
  const selectedImage = useSelector((state) => state.dialog.url);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(dialogOpen(false));
  };

  return (
    <div onClick={handleClose}>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
          <img
            // style={{ maxWidth: 1000, minWidth: 500, marginTop: 20 }}
            src={selectedImage}
            alt="Selected"
          />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

export default ImageDialog;
