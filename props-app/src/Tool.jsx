import React from 'react';



const Tool = ({name , tool}) => {
     return(
        <div>
            <h3> My name is {name} </h3>
            <p>  My favourite tool is {tool} </p>
        </div>
     );
};

// Tool.defaultProps = {
//     name : "Designer",
//     tool : "Figma"
//  }

export default Tool;