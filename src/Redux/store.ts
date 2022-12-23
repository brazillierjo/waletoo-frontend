import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./LoginSlices/LoginSlice";

export const store = configureStore({
    reducer: {
        user: loginReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
