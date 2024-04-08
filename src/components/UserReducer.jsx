import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./data";

const userSlice = createSlice({
    name: "user", 
    initialState: userList,
    reducers: {

    }
})