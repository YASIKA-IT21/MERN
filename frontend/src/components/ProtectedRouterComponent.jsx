import { Outlet,Navigate } from "react-router-dom";
import UserChatComponent from "../pages/user/UserChatComponent";
const ProtectedRouterComponent = ({admin})=>{
  
    if(admin){
        let adminAuth =true;
        return adminAuth?<Outlet/>:<Navigate to="/login"/>
    }
    else{
        let userAuth=true;
        return userAuth?<><UserChatComponent/> <Outlet/></>:<Navigate to="/login"/>
    }
    return auth?<Outlet/>:<Navigate to="/login"/>
}
export default ProtectedRouterComponent;