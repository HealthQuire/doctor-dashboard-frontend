import { Outlet } from 'react-router-dom';
import Nav from '../nav/nav.tsx';
import { BodyContainer, RouterContainer, RouterWrapperDiv } from './styles';
import Header from '../header/header.tsx';

export default function RouterWrapper() {
    return (
        <RouterContainer>
            <Header />
            <RouterWrapperDiv>
                <Nav />
                <BodyContainer>
                    <Outlet />
                </BodyContainer>
            </RouterWrapperDiv>
        </RouterContainer>
    );
}
