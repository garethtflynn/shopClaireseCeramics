import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';
//import './style.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
          stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session });
          });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
          const cart = await idbPromise('cart', 'get');
          dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }
    
        if (!state.cart.length) {
          getCart();
        }
    }, [state.cart.length, dispatch]);

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
          sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
      console.log('pressed button')
      const productIds = [];
  
      state.cart.forEach((item) => {
        for (let i = 0; i < item.purchaseQuantity; i++) {
          productIds.push(item._id);
        }
      });
  
      getCheckout({
        variables: { products: productIds },
      });
    }
    return (
        <div className="cart w-full h-screen flex flex-col pl-6">
          {/* <div className="close" >
            [close]
          </div> */}
          <h2 className='text-4xl'>Shopping Cart</h2>
          {state.cart.length ? (
            <div className='pt-6 w-fit'>
              {state.cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
    
              <div className="flex-row space-between">
                <strong>Total: ${calculateTotal()}</strong>
    
                {Auth.loggedIn() ? (
                <div class='pt-3'>
                  <button class='w-full	rounded-full p-2 text-black bg-[#B0BEC7] hover:text-white hover:p-2' onClick={submitCheckout}>Checkout</button>
                </div>
                ) : (
                  <div>
                  <span>(log in to check out)</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <h3>
              <span role="img" aria-label="shocked">
                😱
              </span>
              You haven't added anything to your cart yet!
            </h3>
          )}
        </div>
    );
};

export default Cart;