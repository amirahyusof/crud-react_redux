import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from "./UserReducer";


function Create(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const users = useSelector((state)=> state.users);
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}));
        Navigate('/')
    }

    return(
        <div className="d-sm-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
            <h2>Create User</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter name" required
                        onChange={event => setName(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" required
                        onChange={event => setEmail(event.target.value)} />
                    </div><br />
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;