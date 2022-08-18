import {Link} from 'react-router-dom'

const UserCard = (props) => {
    console.log('props-->', props)
    let avatar = `https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=`;
    return (
        <>
            <div className="card">
                <div>
                    <img src={avatar} />
                </div>
                <div className="card-detail">
                    <div><b>Name: </b>{props.name}</div>
                    <div><b>Email Address: </b>{props.email}</div>
                    <div><b>Phone: </b>{props.phone}</div>
                    <div><b>Company: </b>{props.company.name}</div>
                    <div><b>Website: </b>{props.website}</div>
                    <div><b>Address: </b>{props.address.suite}, {props.address.street}, {props.address.city}</div>
                </div>
                
            </div>
            <div>
                <Link to={`/edit/${props.id}`} state={props}>Edit</Link>
                <button>Delete</button>
            </div>
        </>
    )

}

export default UserCard;