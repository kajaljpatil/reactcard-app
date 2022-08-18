import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const EditUser = (props) => {
    const {id} = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [phone, setPhone] = useState("")
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            // console.log('res-->', response);
            setName(response.data.name);
            setEmail(response.data.email);
            setCompany(response.data.company.name);
            setPhone(response.data.phone) 
        })
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // call update api
        axios.put(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            {
                name: name,
                email: email,
                company:company,
                phone:phone
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
                <div className='input-group'>
                    <label>Company</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div className='input-group'>
                    <label>phone</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditUser;