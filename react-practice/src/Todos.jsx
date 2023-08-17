import {memo} from 'react';


const Todos = ({todos , addTodo}) => {
    console.log("child render");


    return(
        <>
            <h3> My Todos </h3>
            {todos.map((todo,index) => {
                return <p key={index}></p>;
            })}
            <button onClick={addTodo}> Add Todo </button>
        </>
    )
};


export default memo(Todos);