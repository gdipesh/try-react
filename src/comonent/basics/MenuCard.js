import React from 'react';

const MenuCard = ({menuData }) => {
  return (
  <>
  {menuData.map((curElem) =>{
      return(
        <>
                      <row className="continer " key={curElem.id}>
                       
                      <div className=" col card shadow-sm m-2 p-3  align-item-center" style={{width: "18rem"}} >
                          <img src={curElem.image}  className="card-img-top " alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{curElem.name}</h5>
                            <p className="card-text">{curElem.description}</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                          </div>
                          </div>
                       
                      </row>
          </>
      );
  })}
  
  </>
  );
};

export default MenuCard;
