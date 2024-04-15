import React, {useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from "./UserReducer";


function Update(){
    const Navigate = useNavigate();
    const {id} = useParams();
    const users = useSelector((state)=> state.users);
    const existingUser = users.filter(f => f.id ==== id);
    const {name, email} = existingUser[0];

    const [name, setName] = useState(name);
    const [email, setEmail] = useState(email);
    
   

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}));
        Navigate('/')
    }

    return(
        <div className="d-sm-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
            <h2>Update User</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter name" required
                         />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" required
                        />
                    </div><br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;