import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions/actions';
 

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

 

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>В корзине нет товаров</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <span>{product.name} - {product.price}₽</span>
            <button onClick={() => dispatch(removeFromCart(product))}>Удалить</button>
             
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
