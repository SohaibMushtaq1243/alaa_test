import { createSlice, current } from "@reduxjs/toolkit";
const initialState: any = {
    userData:{email:""},
    darkmode:false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: (state) => initialState,
        userlogin:(state,action)=>{
            state.userData = {
                email:action.payload};
        },
        setMode:(state,action)=>{
            state.darkmode = action.payload;
        }
    }
});
export const {
    reset,
    userlogin,
    setMode
} = userSlice.actions;

export default userSlice.reducer;