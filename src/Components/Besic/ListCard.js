import React from 'react';

const ListCard = ({menuData}) => {
  return (
    <>
    {menuData.map((curElem) => {
      
         return(
    <>
                       
                       <div className="  card shadow-sm m-2 p-3  " style={{width: "18rem"}}  >
                           <img src={curElem.image}  className="card-img-top " alt="..." />
                           <div className="card-body">
                             <h5 className="card-title">{curElem.name}</h5>
                             <p className="card-text">{curElem.description}</p>
                             {/* <a href="https://gdipesh.com.np" className="btn btn-primary">Go somewhere</a> */}
                           </div>
                           </div>
      
    </>
    );
    })}
    </>
  );
};

export default ListCard;
