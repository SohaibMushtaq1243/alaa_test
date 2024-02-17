import { createSlice, current } from "@reduxjs/toolkit";
const initialState: any = {
    userData:{email:""}
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: (state) => initialState,
        userlogin:(state,action)=>{
            console.log("entered", action.payload)
            state.userData = {
                email:action.payload};
            console.log(state)
        }
    }
});
export const {
    reset,
    userlogin
} = userSlice.actions;

export default userSlice.reducer;