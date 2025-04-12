import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Cartpage from "./pages/Cartpage.jsx";
import Register from "./pages/Register.jsx";
import Loginpage from "./pages/Loginpage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";

{/* User */}

import UserOrderPage from "./pages/user/UsersOrderPage.jsx";
import Usercartdetailspage from "./pages/user/Usercartdetailspage.jsx";
import Userprofilepage from "./pages/user/Userprofilepage.jsx";
import Userorderdetailspage from "./pages/user/Userorderdetailspage.jsx";
{/* admin */}

import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage.jsx";
import AdminChatPage from "./pages/admin/AdminChatPage.jsx";
import AdminCreateProductsPage from "./pages/admin/AdminCreateProductsPage.jsx";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage.jsx";
import AdminEdituserpage from "./pages/admin/AdminEdituserpage.jsx";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage.jsx";
import AdminProductPage from "./pages/admin/AdminProductPage.jsx";
import AdminUserPage from "./pages/admin/AdminUserPage.jsx";

{/* header footer */}
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import ProtectedRouterComponent from "./components/ProtectedRouterComponent.jsx";
function App() {


  return (
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path="/" element={<Homepage/>}> </Route>
      <Route path="/cart" element={<Cartpage/>}> </Route>
      <Route path="/register" element={<Register/>}> </Route>
      <Route path="/product-list" element={<ProductListPage/>}> </Route>
      <Route path="/product-details/:id" element={<ProductDetailsPage/>}> </Route>
      <Route path="/login" element={<Loginpage/>}> </Route>
      <Route path="*" element="Page not found 404"> </Route>
     {/* protected user route */}

      <Route element={<ProtectedRouterComponent admin={false}/>}> 
           <Route path="/user-cart-details" element={<Usercartdetailspage/>}> </Route>
           <Route path="/user-order-details" element={<Userorderdetailspage/>}> </Route>
           <Route path="/user" element={<Userprofilepage/>}> </Route>
           <Route path="/user-order-page" element={<UserOrderPage/>}> </Route>
      </Route>
      {/* protected admin route */}
      <Route element={<ProtectedRouterComponent admin={true}/>}> 
           <Route path="/admin/users" element={<AdminUserPage/>}> </Route>
           <Route path="/user-order-details" element={<Userorderdetailspage/>}> </Route>
           <Route path="/user" element={<Userprofilepage/>}> </Route>
           <Route path="/user-order-page" element={<UserOrderPage/>}> </Route>
      </Route>

    
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
   

  );
}

export default App
