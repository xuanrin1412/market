import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../Redux/store'

// Define a type for the slice state
export interface openPage {
    selectedTab: null | number
}

// Define the initial state using that type
const initialState: openPage = {
    selectedTab: 0,
}

export const openPage = createSlice({
    name: 'reduxSlice',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeTab: (state, action) => {
            state.selectedTab = action.payload
        },
    },
})

export const { changeTab } = openPage.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTab = (state: RootState) => state.reduxSlice.selectedTab

export default openPage.reducer
