import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import {clearCart} from "../Utils/CartSlice";

const CartList = () => {
  const dispatch = useDispatch();

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="pt-16">
      <button onClick={() => handleEmptyCart()}>Clear Cart</button>
      <div className="grid grid-cols-4 gap-5">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
