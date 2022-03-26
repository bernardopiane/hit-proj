import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyButton = styled(Link)`
    background: rgb(234,145,107);
    background: linear-gradient(180deg, rgba(234,145,107,1) 0%, rgba(224,90,77,1) 100%);
    border: none;
    padding: 12px 58px;
    color: white;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    border-radius: 10px;
    text-decoration: none;
`;

export default function Button({ children, ...props }) {
    return (
        <MyButton to={props.path}>{children}</MyButton>
    )
}
