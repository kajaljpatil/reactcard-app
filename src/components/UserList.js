import axios from "axios";
import { useEffect, useState } from "react"
import UserCard from "./UserCard";

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            console.log('userlist data-->', response);
            let userData = response.data;
            setUsers(userData)
            console.log('users-->', users)
        })
    }, [])

    return (
        <div className="list-container">
           <h2>User List</h2>
           {
            users.map(user => {
                return (<UserCard {...user} />)
            })
           }
           
        </div>
        
    )
}

export default UserList;