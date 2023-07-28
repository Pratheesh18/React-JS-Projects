import { useEffect , useState } from "react";
import axios from 'axios';
import './card.css';



const Api = () => {
    const [loading , setLoading] = useState(true);
    const [users,setUsers] = useState(null);
    const [selectedUserEmail , setSelectedUserEmail] = useState(null);
    const [displayMode , setDisplayMode] = useState("email");
    const [selectedUser , setSelectedUser] = useState(null);


    useEffect(() => {
        fetchUsers();
    } , []);

     const fetchUsers = () => {
        axios
             .get('https://jsonplaceholder.typicode.com/users')
             .then((res) => {
                console.log(res);
                setLoading(false);
                setUsers(res.data);
             })
             .catch((err) => {
                console.log(err);
             })
     }

     if(loading){
          return <h1> Loading </h1>
     }

    const handleUserClick = (user) => {
        setSelectedUser(user);
        user.id <= 5 ? setDisplayMode("email") : setDisplayMode("username");
    }
   
     console.log(users)

    return(
        
        <div>
            <h1>  Data fetched successfully </h1>
            <div className="item-container">
                {  users.map((user) => (
                    <div className="card"  key={user.id} onClick={() => handleUserClick(user)} >
                       <p>  {user.name} </p>
                    </div>
                ))}
            </div>
            {selectedUser && (
                <div className="selected-user-info">
                    {displayMode === "email" ? (
                        <p>  Email : {selectedUser.email} </p>
                    ): (
                        <p>  username : {selectedUser.username} </p>
                    )}
                </div>
            )}
        </div>
    )
};

export default Api;