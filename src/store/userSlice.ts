import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  user: string;
  dashboardIndex: number;
  theme: string;
};

const initialState: initialState = {
  user: "",
  dashboardIndex: 0,
  theme: "themeLight",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
    updateDashboardIndex(state, action: PayloadAction<number>) {
      state.dashboardIndex = action.payload;
    },
    updateTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
  },
});

//Create the store
const store = configureStore({
  reducer: userSlice.reducer,
});

export const usersActions = userSlice.actions;
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
