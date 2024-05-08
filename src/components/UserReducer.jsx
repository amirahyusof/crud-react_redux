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
            const updateUsers = state.find(user => user.id === id);
            if(updateUsers){
                updateUsers.name = name;
                updateUsers.email = email;
            };
        }, 
        deleteUser:(state, action) => {
            const {id} = action.payload;
            const deleteUsers = state.find(user => user.id === id);
            if(deleteUsers){
                return state.filter( f => f.id !== id)
            };


        }


    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;