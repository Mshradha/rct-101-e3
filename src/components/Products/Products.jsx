import React, { useEffect, useState } from "react";
import Product from "./Product/Product"

const Products = () => {
  const [productData,setProductData] = useState([]);
  useEffect(()=>{
    const getData = async()=> {
      let r = await fetch("http://localhost:8080/products");
      let d = await r.json();
      setProductData(d);
      console.log(d)
    }
    getData()
  },[])
  return <div>
    <div>{productData.map((el)=> <Product key={el.id}{...el}/>)}
      </div></div>
};

export default Products;
