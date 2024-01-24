import Cart from "./components/Cart/Cart";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import { CartContextProvider } from "./components/Store/CartContext";
import { UserProgressContextProvider } from "./components/Store/UserProgressContex";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
