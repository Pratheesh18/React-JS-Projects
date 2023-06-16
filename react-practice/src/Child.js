import React , {useState} from 'react';



const ChildComponent = ({onData}) => {
    const [inputValue , setInputvalue] = useState('');

    const handleInputChange = (e) => {
        setInputvalue(e.target.value);
    }

    const sendDataToParent = () => {
        onData(inputValue);
    };


    return(
        <div>
            <input type='text' value={inputValue} onChange={handleInputChange} />
            <button onClick={sendDataToParent} > Send Data To Parent </button>
        </div>
    );


}


export default ChildComponent;