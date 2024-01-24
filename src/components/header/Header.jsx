import { useContext } from "react";
import CartContext from "../Store/CartContext";
import Button from "../UI/Button";
import UserProgressContext from "../Store/UserProgressContex";
import logoImg from "../../assets/logo.jpg";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalCartItems, item) => {
    return totalCartItems + item.quantity;
  }, 0);

  function handleShowCart() {
    // Gọi hàm trong context để mở giỏ hàng
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
