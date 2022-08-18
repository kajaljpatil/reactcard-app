import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const EditUser = (props) => {
    const {id} = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            // console.log('res-->', response);
            setName(response.data.name);
            setEmail(response.data.email)
        })
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // call update api
        axios.put(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            {
                name: name,
                email: email
            }
        ).then(response => {
            // update users state variable
            console.log('response-->', response)
            props.updateUser(response.data)
            
        })
    }

    return (
        <div>
            <h2>Edit User: {id}</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='input-group'>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditUser;