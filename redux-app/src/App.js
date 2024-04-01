import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { increment , decrement } from "./slices/counterSlice";
import Anime from "./components/Anime";


const App = () => {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);


  console.log("counter" , count)

  return(
    <div>
      {/* <div> {count} </div>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(decrement())}> Decrement </button> */}
      <Anime />
    </div>
  )
};


export default App;
