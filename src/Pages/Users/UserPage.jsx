import './Users.css'
import { Link, useLoaderData  } from "react-router-dom"
export default function UserPage(){
    const user = useLoaderData();
    return(
        <div className="Main user-page">
            <div>
                <Link className='btn_back' to="/users">Back</Link>
            </div>
            <h2>User: {user.name}</h2>
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Phone: {user.phone}</h2>
            <h2>Website: {user.website}</h2>
            <h2>Address:</h2>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.suite}</p>
            <p>City: {user.address.city}</p>
            <p>Zipcode: {user.address.zipcode}</p>
            <p>Geo: Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
            <h2>Company:</h2>
            <p>Name: {user.company.name}</p>
            <p>Catchphrase: {user.company.catchPhrase}</p>
            <p>Business: {user.company.bs}</p>
        </div>
    )
}
