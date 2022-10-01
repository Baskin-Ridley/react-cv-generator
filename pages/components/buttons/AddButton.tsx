import React from 'react'; 

const AddButton = (props: { onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => { 
  
  return ( 
    
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.onClick}>{props.text}</button> 
    
  ); 
  
} 

export {AddButton};