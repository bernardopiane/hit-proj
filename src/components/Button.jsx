import React from 'react'
import styled from 'styled-components';

const MyButton = styled.button`
    background: rgb(234,145,107);
    background: linear-gradient(180deg, rgba(234,145,107,1) 0%, rgba(224,90,77,1) 100%);
    border: none;
    padding: 12px 58px;
    color: white;
    font-size: 12px;
`;

export default function Button({ children, ...props }) {
    return (
        <MyButton>{children}</MyButton>
    )
}
