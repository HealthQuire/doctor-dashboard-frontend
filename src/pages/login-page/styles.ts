import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
`;

export const Input = styled.input`
    margin: 10px;
    padding: 10px;
    width: 200px;
`;

export const Button = styled.button`
    margin: 10px;
    padding: 10px;
    width: 200px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const Error = styled.p`
    color: red;
`;

export const Success = styled.p`
    color: green;
`;

export const Title = styled.h1`
    margin: 10px;
`;
