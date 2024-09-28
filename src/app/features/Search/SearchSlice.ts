import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
    open: boolean;
}

const initialState: SearchState = {
    open: false,
}

export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchOpen: (state) => {
            state.open = true;
        },
        setSearchClose(state) {
            state.open = false;
        }
    },
});

export const { setSearchOpen, setSearchClose } = SearchSlice.actions;
export default SearchSlice.reducer