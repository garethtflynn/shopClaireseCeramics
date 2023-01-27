import React from "react";
import { Link } from "react-router-dom";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";

import curvymug1 from "../../assets/curvymug1.jpg";
// import curvymug2 from '../../assets/curvymug2.jpg'
// import curvymug3 from '../../assets/curvymug3.jpg'
import pitcher1 from "../../assets/pitcher1.jpg";
// import pitcher2 from '../../assets/pitcher2.jpg'
// import pitcher3 from '../../assets/pitcher3.jpg'
import set1 from "../../assets/set1.jpg";
// import set2 from '../../assets/set2.jpg'
// import set3 from '../../assets/set3.jpg'
import twinmug1 from "../../assets/twinmug1.jpg";
// import twinmug2 from '../../assets/twinmug2.jpg'
// import twinmug3 from '../../assets/twinmug3.jpg'

function ProductItem(props) {
  const [state, dispatch] = useStoreContext();
  const { _id, name, price, image, description, quantity } = props.item;

  const { cart } = state;
  const addToCart = async () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...props.item, purchaseQuantity: 1 },
      });
      await idbPromise("cart", "put", { ...props.item, purchaseQuantity: 1 });
    }
  };

  const getImage = () => {
    if (image === "curvymug1.jpg") {
      return curvymug1;
    }
    if (image === "pitcher1.jpg") {
      return pitcher1;
    }
    if (image === "set1.jpg") {
      return set1;
    }
    if (image === "twinmug1.jpg") {
      return twinmug1;
    }
  };

  return (
    <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mx-auto gap-5">
      <div className="text-center">
        <Link to={`/products/${_id}`}>
          <img alt={name} src={getImage()} />
          <p className="mt-3 mb-2">
            {name} - ${price}
          </p>
        </Link>
        <div>
          <div>
            {quantity} {pluralize("item", quantity)} in stock
          </div>
        </div>
        <div class='flex flex-col'>
        <button
          className="px-10 py-1 transition ease-in duration-200 rounded hover:shadow-lg text-white italic font-light bg-[#B0BEC7] "
          onClick={async () => {
            await addToCart();
          }}
        >
          Add To Cart
        </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
