import React, {useState} from 'react';
import ListCard from './ListCard';
import  menu from "./cardApi.js";

const Shoes = () => {
      const [menuData] =useState(menu);
  return (
        <>
        <ListCard menuData={menuData} />        
        </>
    );
};

export default Shoes;
