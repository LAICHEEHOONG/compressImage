import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  urls: [],
  compressUrls: [],
  names: [],
  oriTypes: [],
  compressTypes: [],
  oriSizes: [],
  compressSizes: [],
}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    addImage: (state, action) => {
        state.urls = [...state.urls, action.payload.url];
        state.compressUrls = [...state.compressUrls, action.payload.compressUrl]
        state.names = [...state.names, action.payload.name];
        state.oriTypes = [...state.oriTypes, action.payload.oriType];
        state.compressTypes = [...state.compressTypes, action.payload.compressType];
        state.oriSizes = [...state.oriSizes, action.payload.oriSize];
        state.compressSizes = [...state.compressSizes, action.payload.compressSize];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addImage } = imageSlice.actions

export default imageSlice.reducer