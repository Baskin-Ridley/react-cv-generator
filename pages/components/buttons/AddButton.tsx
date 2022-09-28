import React from 'react'; 

const AddButton = (props: { onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => { 
  
  return ( 
    
    <button className="AddButton" onClick={props.onClick}>{props.text}</button> 
    
  ); 
  
} 

export {AddButton};