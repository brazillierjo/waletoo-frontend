import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Logs } from "../../APIs/Logs";

export const loginUser = createAsyncThunk("LOGIN", async (data: { email: string; password: string }) => {
    const response = await Logs.login(data.email, data.password);
    console.log("response", response);
    return response.data;
});

const loginSlice = createSlice({
    name: "login",
    initialState: {
        loading: false,
        error: null,
        data: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            console.log("state", state);
            console.log("action", action);
        });
    },
});

export const loginReducer = loginSlice.reducer;
