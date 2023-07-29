import React from 'react';


const AlertButton = ({message , children}) => {
  return(
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
};

 const ToolBar = () => {
  return(
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading">
        Upload Image
      </AlertButton>
    </div>
  )
};


export default ToolBar;

