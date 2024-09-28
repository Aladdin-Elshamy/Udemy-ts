import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface NestedSidebarState {
    open: number | null;
}

const initialState: NestedSidebarState = {
    open: null,
}

export const NestedSidebarSlice = createSlice({
    name: "nestedSidebar",
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<number | null>) => {
            state.open = action.payload;
        },
        setClose(state) {
            state.open = null;
        }
    },
});

export const { setOpen, setClose } = NestedSidebarSlice.actions;
export default NestedSidebarSlice.reducer