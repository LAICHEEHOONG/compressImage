import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urls: [],
  compressUrls: [],
  names: [],
  oriTypes: [],
  compressTypes: [],
  oriSizes: [],
  compressSizes: [],
  compressionPercentage: [],
  oriWH: [],
  compressWH: [],
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.urls = [action.payload.url, ...state.urls];
      state.compressUrls = [action.payload.compressUrl, ...state.compressUrls];
      state.names = [action.payload.name, ...state.names];
      state.oriTypes = [action.payload.oriType, ...state.oriTypes];
      state.compressTypes = [
        action.payload.compressType,
        ...state.compressTypes,
      ];
      state.oriSizes = [action.payload.oriSize, ...state.oriSizes];
      state.compressSizes = [
        action.payload.compressSize,
        ...state.compressSizes,
      ];
      state.compressionPercentage = [
        action.payload.compressionPercentage,
        ...state.compressionPercentage,
      ];
      state.oriWH = [action.payload.oriWH, ...state.oriWH];
    },
    addCompressWH: (state, action) => {
      // state.compressWH = [...state.compressWH, action.payload];
      state.compressWH = [action.payload, ...state.compressWH];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addImage, addCompressWH } = imageSlice.actions;

export default imageSlice.reducer;

let x = () => {
  let state, action;
  state.urls = [...state.urls, action.payload.url];
  state.compressUrls = [...state.compressUrls, action.payload.compressUrl];
  state.names = [...state.names, action.payload.name];
  state.oriTypes = [...state.oriTypes, action.payload.oriType];
  state.compressTypes = [...state.compressTypes, action.payload.compressType];
  state.oriSizes = [...state.oriSizes, action.payload.oriSize];
  state.compressSizes = [...state.compressSizes, action.payload.compressSize];
  state.compressionPercentage = [
    ...state.compressionPercentage,
    action.payload.compressionPercentage,
  ];
  state.oriWH = [...state.oriWH, action.payload.oriWH];
};

let y = () => {
  let state, action;
  state.urls = [action.payload.url, ...state.urls];
  state.compressUrls = [action.payload.compressUrl, ...state.compressUrls];
  state.names = [action.payload.name, ...state.names];
  state.oriTypes = [action.payload.oriType, ...state.oriTypes];
  state.compressTypes = [action.payload.compressType, ...state.compressTypes];
  state.oriSizes = [action.payload.oriSize, ...state.oriSizes];
  state.compressSizes = [action.payload.compressSize, ...state.compressSizes];
  state.compressionPercentage = [
    action.payload.compressionPercentage,
    ...state.compressionPercentage,
  ];
  state.oriWH = [action.payload.oriWH, ...state.oriWH];
};
