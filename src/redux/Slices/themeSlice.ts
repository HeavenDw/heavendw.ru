import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeSlice {
  theme: string
}

const initialState: ThemeSlice = {
  theme: 'light'
};

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
