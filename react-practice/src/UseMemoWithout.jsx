import {useState} from 'react';
import './App.css';

function factorialOf(n){
  console.log('factorialOF(n) called !');
  return n<=0 ? 1 : n * factorialOf(n-1);
}



export default function UseMemoWithout(){
  const [number , setNumber] = useState(1);
  const [inc , setInc] = useState(0);


  const factorial = factorialOf(number);


  const onChange = event => {
    setNumber(Number(event.target.value));
  }

  const onClick = () => setInc(i => i+1);


  return (
    <div className='container'>
      Factorial of 
         <input style={{marginTop:"30px" , marginLeft:"20px"}} type='number' value={number} onChange={onChange} /> is {factorial} <br></br>
         <button style={{marginTop:"30px"}} onClick={onClick}> Re render </button>
    </div>
  )
}