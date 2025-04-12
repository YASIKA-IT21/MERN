import { Outlet,Navigate } from "react-router-dom";
const ProtectedRouterComponent = ()=>{
    const auth=false;
    return auth?<Outlet/>:<Navigate to="/login"/>
}
export default ProtectedRouterComponent;