import { configureStore } from "@reduxjs/toolkit";
import movieSlicer from "./movieSlice";

export const movieStore = configureStore({
    reducer:{
        movieSlicer:movieSlicer
    }
}) 