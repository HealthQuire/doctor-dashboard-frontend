import { Outlet } from "react-router-dom";
import Nav from "../nav/nav.tsx";
import {BodyContainer, RouterWrapperDiv} from "./styles";
import Header from "../header/header.tsx";


export default function RouterWrapper() {
    return (
        <RouterWrapperDiv>
            <Nav/>
            <BodyContainer>
                <Header/>
                <Outlet/>
            </BodyContainer>
        </RouterWrapperDiv>
    )
}
