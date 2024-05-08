import React, {useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from "./UserReducer";


function Update(){
    const navigate = useNavigate();
    const {id} = useParams();
    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();
    
    const existingUser = users.filter(f => f.id === id);
    const {name, email} = existingUser[0];
    const [updateName, setName] = useState(name);
    const [updateEmail, setEmail] = useState(email);

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: updateName,
            email: updateEmail
        }))
        navigate('/')

    }
    

    return(
        <div className="d-sm-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
            <h2>Update User</h2>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter name" required
                         value={updateName} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" required
                        value={updateEmail} onChange={e => setEmail(e.target.value)} />
                    </div><br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;