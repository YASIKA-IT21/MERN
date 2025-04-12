import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Cartpage from "./pages/Cartpage.jsx";
import Register from "./pages/Register.jsx";
import Loginpage from "./pages/Loginpage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";
import UserOrderPage from "./pages/user/UsersOrderPage.jsx";
import Usercartdetailspage from "./pages/user/Usercartdetailspage.jsx";
import Userprofilepage from "./pages/user/Userprofilepage.jsx";
import Userorderdetailspage from "./pages/user/Userorderdetailspage.jsx";
import ProtectedRouterComponent from "./components/ProtectedRouterComponent.jsx";
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}> </Route>
      <Route path="/cart" element={<Cartpage/>}> </Route>
      <Route path="/register" element={<Register/>}> </Route>
      <Route path="/product-list" element={<ProductListPage/>}> </Route>
      <Route path="/product-details/:id" element={<ProductDetailsPage/>}> </Route>
      <Route path="/login" element={<Loginpage/>}> </Route>
      <Route path="*" element="Page not found 404"> </Route>
      <Route element={<ProtectedRouterComponent/>}> 
           <Route path="/user-cart-details" element={<Usercartdetailspage/>}> </Route>
           <Route path="/user-order-details" element={<Userorderdetailspage/>}> </Route>
           <Route path="/user" element={<Userprofilepage/>}> </Route>
           <Route path="/user-order-page" element={<UserOrderPage/>}> </Route>
      </Route>
      
    
    </Routes>
    </BrowserRouter>
   

  );
}

export default App
