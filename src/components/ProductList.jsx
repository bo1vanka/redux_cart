import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';
 
 

const ProductList = () => {
    const dispatch = useDispatch();
    const products = [
        {id:1,name:'Продукт 1',price:100},
        {id:2,name:'Продукт 2',price:200},
        {id:3,name:'Продукт 3',price:300},
    ];
  return (
    <div className='product-list'>
      <h1>Продукты</h1>
      <div className='products'> 
      {products.map((product)=>(
        <div key={product.id} className='product'>
          <span>{product.name} - {product.price}₽</span>         
           <button onClick={() => dispatch(addToCart(product))}>Добавить в корзину</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ProductList
