import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Logs } from "../../APIs/Logs";

const login = createAsyncThunk("login/login", async (data: { email: string; password: string }) => {
    const response = await Logs.login(data.email, data.password);
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
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            console.log("state", state);
            console.log("action", action);
        });
    },
});

export const loginReducer = loginSlice.reducer;
