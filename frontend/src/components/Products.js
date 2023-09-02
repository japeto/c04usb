import * as React from 'react'
import { useEffect, useState } from 'react'

const Products =()=>{
  const [products, setProducts]= useState([])

  const fetchData =() =>{
    fetch("http://localhost:9030/products")
      .then(response=>{
        return response.json()
      })
      .then(data=>{
        setProducts(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {products.map((item)=>{
        return(
          <span> {item.product_name} ------- {item.product_price} <br/></span>
        )
      })}
    </div>
  )
};

export default Products;