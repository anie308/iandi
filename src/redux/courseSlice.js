import { createSlice } from "@reduxjs/toolkit"

const initialState={
    title: "",
    meta: "",
    whatToLearn: "",
    whoShouldTake: "",
    lessons: "",
    bonus: "",
    avaialbility: true,
    thumbnail: "",
}

export const courseSlice = createSlice({
    name: 'course',
    initialState, 
    reducers: {
        getCourses:(state) =>{
        }
    }
})

export const { getCourses } = courseSlice.actions
export default courseSlice.reducer