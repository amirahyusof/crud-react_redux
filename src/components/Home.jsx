import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { deleteUser } from './UserReducer';


function Home(){
    const dispatch = useDispatch();
    const users = useSelector((state)=> state.users);


    const handleDelete = (id) => {
        dispatch(deleteUser({id:id}))

    }
    
    return(
        <div className='container'>
            <h1>CRUD System using Redux</h1>
            <Link to='/create' className="btn btn-success my-3">Create +</Link>
            <table className='table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=> (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-sm btn-primary" to={`/edit/${user.id}`}>Edit</Link>
                                <button className="btn btn-sm btn-danger ms-2" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;