import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const thunkGet = createAsyncThunk(
    'get/data',
    async () => {
        let getMovie =await axios.get('https://fake-movie-database-api.herokuapp.com/api?s=batman');
        return getMovie.data.Search
        
    }
)