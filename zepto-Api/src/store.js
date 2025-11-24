import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./ReduxSlices/signUpSlice"

export const store = configureStore({
    reducer : {
        signUpSlice : signUpSlice
    },
});