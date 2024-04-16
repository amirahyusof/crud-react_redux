import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name: "users", 
    initialState: userList,
    reducers: {
        addUser: (state, action) =>{
            state.push(action.payload)
        },
        updateUser:(state, action) => {
            const {id, name, email} = action.payload;
            const updateUsers = state.find(user => user.id == id);
            if(updateUsers){
                updateUsers.name = name;
                updateUsers.email = email;
            }
        }


    }
})

export const {addUser, updateUser} = userSlice.actions;
export default userSlice.reducer;