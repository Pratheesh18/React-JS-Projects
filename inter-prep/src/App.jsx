import React  , {useEffect , useState} from 'react';
import Shape from './components/Shape';



const boxData = [
  [1,1,1],
  [1,0,0],
  [1,1,1]
];




const App = () => {
  return(
    <div>
      {/* <Page /> */}
      <Shape data={boxData} />
    </div>
  )
};


export default App;