// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let totalPrice = 0

      cartList.forEach(eachItem => {
        totalPrice += eachItem.price * eachItem.quantity
      })

      const itemsInCart = cartList.length

      return (
        <div className="cart-summary-container">
          <h1 className="total-price-heading">
            Order Total:
            <span className="span-total-price">Rs {totalPrice}/-</span>
          </h1>
          <p className="item-in-cart">{itemsInCart} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
