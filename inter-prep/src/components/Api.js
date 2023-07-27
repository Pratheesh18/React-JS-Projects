import { useEffect , useState } from "react";



const Api = () => {
    const [loading , setLoading] = useState(true);
    const [data,setData] = useState(null);


    const fetchApi = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then((response) => {
            return response.json();
           })
           .then((json) => {
            console.log(json);
            setLoading(false);
            setData(json);
           });
    };


    useEffect(() => {
        fetchApi();
    } , []);

    if(loading){
        return <h1>  Loading </h1>;
    }

    return(
        <div>
            <h1>  Data fetched successfully </h1>
            {JSON.stringify(data)}
        </div>
    )
};

export default Api;