import { createSlice } from "@reduxjs/toolkit"

const initialState={
    title: "",
    meta: "",
    content: "",
    slug: "",
    thumbnail: "",
}

export const biteSlice = createSlice({
    name: 'bite',
    initialState,
    reducers: {
        getBite:(state) =>{
        }
    }
})

export const { getBite } = biteSlice.actions

export default biteSlice.reducer