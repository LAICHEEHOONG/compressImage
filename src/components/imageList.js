import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ImageListItem,
  ImageList,
  ImageListItemBar,
  IconButton,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { bytesToMB } from "../util/tool";
import { dialogURL, dialogOpen } from "../features/dialog/dialogSlice";

export default function StandardImageList() {
  const oriUrls = useSelector((state) => state.image.urls);
  const oriSizes = useSelector((state) => state.image.oriSizes);
  const oriTypes = useSelector((state) => state.image.oriTypes);
  const compressUrls = useSelector((state) => state.image.compressUrls);
  const compressSizes = useSelector((state) => state.image.compressSizes);
  const compressTypes = useSelector((state) => state.image.compressTypes);
  const dispatch = useDispatch();

  const clickImageHandle = (event) => {
    dispatch(dialogURL(event.target.name));
    dispatch(dialogOpen(true))
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Image comparison
      </Typography>

      <div style={{ display: "flex" }}>
        <ImageList
          sx={{ width: 500, height: 800, marginRight: 5 }}
          cols={1}
          rowHeight={300}
        >
          {oriUrls.map((url, index) => (
            <ImageListItem key={index}>
              <img
                name={`${url}`}
                onClick={clickImageHandle}
                style={{ maxHeight: 300, cursor: 'pointer' }}
                src={url}
                alt={` ${index + 1}`}
              />
              <ImageListItemBar
                title={`
                   Type: ${oriTypes[index].substring(6)} , Size: ${bytesToMB(
                  oriSizes[index]
                )}
                  `}
                actionIcon={
                  <IconButton sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>

        <ImageList sx={{ width: 500, height: 800 }} cols={1} rowHeight={300}>
          {compressUrls.map((url, index) => (
            <ImageListItem key={index}>
              <img
                name={`${url}`}
                onClick={clickImageHandle}
                style={{ maxHeight: 300, cursor: 'pointer' }}
                src={url}
                alt={` ${index + 1}`}
              />
              <ImageListItemBar
                title={`
                Type: ${compressTypes[index].substring(6)} , Size: ${bytesToMB(
                  compressSizes[index]
                )}
                `}
                actionIcon={
                  <IconButton sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
