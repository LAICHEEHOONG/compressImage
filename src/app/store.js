import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/image_/imageSlice';
import dialogReducer from '../features/dialog/dialogSlice';
import progressReducer from '../features/progress/progressSlice';

export const store = configureStore({
  reducer: {
    image: imageReducer,
    dialog: dialogReducer,
    progress: progressReducer
  },
})