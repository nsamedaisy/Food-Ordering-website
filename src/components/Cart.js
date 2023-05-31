import React from 'react';
import { useCart } from 'react-use-cart';
import '../index.css'

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 classname='text-center'></h1>
  return (
    <section className='cart-section'>
      <div>
        <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
        <div>
          {items.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.img} />
                <ul>
                  <li>{item.title}</li>
                  <li>$ {item.price}</li>
                  Quantity ({item.quantity})
                </ul>
                <div className='cart-container'>
                  <button className='cart-btn' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>

                  <button className='cart-btn' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>

                  <button className='cart-btn' onClick={() => removeItem(item.id)}>Remove Item</button>
                </div>

              </div>
            )
          })}
        </div>
        <div>
          <h2>Total Price: $ {cartTotal}</h2>
        </div>

        <div className='cart-container'>
          {/* <button className='cart-btn' onClick={() => emptyCart()}>Clear cart</button> */}
          <button className='cart-btn'  >Buy Now</button>
        </div>
      </div>
    </section>
  )
}

export default Cart