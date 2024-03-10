import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../../styles/theme.ts';

export const AppointmentPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
`;

export const AppointmentForm = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

export const AppointmentFormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AppointmentFormTitle = styled.h1``;

export const AppointmentFormSubtitle = styled.h3`
    font-style: italic;
    font-weight: 400;
`;

export const AppointmentFormLabel = styled.label`
    margin-bottom: 16px;
    opacity: 0.8;
    font-size: 24px;
    font-weight: 900;
`;

export const AppointmentFormInput = styled.input``;

export const AppointmentFormButton = styled(NavLink)`
    width: 512px;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
    background-color: ${theme.colors.accentOne};
    padding: 14px 20px;
    border: none;
`;

export const AppointmentFormTextArea = styled.textarea`
    width: 100%;
    margin-bottom: 64px;
    min-height: 256px;
`;
