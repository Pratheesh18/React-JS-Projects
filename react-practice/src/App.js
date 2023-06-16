import React , {useState} from 'react';
import ChildComponent from './Child';



const App = () => {
  const [dataFromChild , setDataeFromChild]  = useState('');


  const handledataFromChild = (data) => {
    setDataeFromChild(data);
  };



  return(
    <div>
      <h1> Data From Child : {dataFromChild} </h1>
      <ChildComponent onData={handledataFromChild} /> 
    </div>
  );
};


export default App;