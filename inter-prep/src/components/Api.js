import { useEffect , useState } from "react";
import axios from 'axios';
import './card.css';



const Api = () => {
    const [loading , setLoading] = useState(true);
    const [users,setUsers] = useState(null);


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
   
     console.log(users)

    return(
        
        <div>
            <h1>  Data fetched successfully </h1>
            <div className="item-container">
                {  users.map((user) => (
                    <div className="card"  key={user.id} >
                       <p>  {user.name} </p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Api;