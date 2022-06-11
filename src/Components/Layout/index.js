import { Outlet } from "react-router-dom";
import HeaderComponent from "../Header";

const LayoutComponent = () => {
    return ( 
        <HeaderComponent>
            <Outlet/>
        </HeaderComponent>
     );
}
 
export default LayoutComponent;