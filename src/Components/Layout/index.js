import { Outlet } from "react-router-dom";
import HeaderComponent from "../Header";
import RightDrawer from "../RightDrawer";

const LayoutComponent = () => {
    return (
        <>
        <RightDrawer/>
        <HeaderComponent>
            <Outlet/>
        </HeaderComponent>
        </>
     );
}
 
export default LayoutComponent;