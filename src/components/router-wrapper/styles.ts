import styled from 'styled-components';
import theme from '../../styles/theme.ts';

export const RouterWrapperDiv = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: row;
    align-items: end;
    justify-content: end;
    background-color: ${theme.colors.bgPrimary};
`;

export const BodyContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: end;
    justify-content: end;
`;
