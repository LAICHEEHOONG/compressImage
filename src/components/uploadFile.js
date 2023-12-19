import React, { useState } from "react";
import { Typography, Paper, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addImage } from "../features/image_/imageSlice";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";
import { resizeAndConvertToWebP } from "../util/tool";
import {progressOpen, progressReset, progressPercent} from '../features/progress/progressSlice';

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function InputFileUpload() {
  // const [selectedFile, setSelectedFile] = useState(null);
  const lastImage = useSelector((state) => state.image);
  const dispatch = useDispatch();

  const handleFileChange = async (event) => {
    dispatch(progressOpen(true));
    dispatch(progressPercent(10));
    const file = event.target.files[0];
    dispatch(progressPercent(10));
    if(file === '' || !file) {
      return;
    }
    dispatch(progressPercent(10));
    const resizedImage = await resizeAndConvertToWebP(file, 300, 300, 0.8);
    dispatch(progressPercent(60));
    const compressUrl = URL.createObjectURL(resizedImage);

    let dataObj = {
      url: URL.createObjectURL(file),
      compressUrl,
      name: file.name,
      oriSize: file.size,
      compressSize: resizedImage.size,
      oriType: file.type,
      compressType: resizedImage.type,
    };

    dispatch(addImage(dataObj));

    dispatch(progressPercent(10));

    setTimeout(() => {
      dispatch(progressReset())
    }, 1000)
  };



  return (
    <>
      <Button
        component="label"
        role={undefined}
        tabIndex={-1}
        variant="outlined"
        color="neutral"
        // onClick={handleUpload}
        startDecorator={
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
          </SvgIcon>
        }
      >
        Upload a image
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>

      <div>
        {lastImage.names.length > 0 ? (
          <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Typography variant="h6">
                  Name: {lastImage.names[lastImage.names.length - 1]}
                </Typography>
                <Typography variant="h6">
                  Size: {lastImage.oriSizes[lastImage.names.length - 1]}
                </Typography>
                <Typography variant="h6">
                  Type: {lastImage.oriTypes[lastImage.names.length - 1]}
                </Typography>

                <img
                  style={{ maxWidth: 1000, minWidth: 500, marginTop: 20 }}
                  src={lastImage.urls[lastImage.names.length - 1]}
                  alt="Selected"
                />
              </Grid>
            </Grid>
          </Paper>
        ) : null}
      </div>
    </>
  );
}
