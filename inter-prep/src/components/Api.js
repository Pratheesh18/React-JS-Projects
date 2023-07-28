import { useEffect , useState } from "react";
import axios from 'axios';
import './card.css';



const Api = () => {
    const [loading , setLoading] = useState(true);
    const [users,setUsers] = useState(null);
    const [selectedUserEmail , setSelectedUserEmail] = useState(null);


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

     const handleUserClick = (email) => {
        setSelectedUserEmail(email);
        setTimeout(() => {
            setSelectedUserEmail('');
        } , 5000)
     }
   
     console.log(users)

    return(
        
        <div>
            <h1>  Data fetched successfully </h1>
            <div className="item-container">
                {  users.map((user) => (
                    <div className="card"  key={user.id} onClick={() => handleUserClick(user.email)} >
                       <p>  {user.name} </p>
                    </div>
                ))}
            </div>
            {selectedUserEmail && <div className="card">  Email : {selectedUserEmail} </div>}
        </div>
    )
};

export default Api;