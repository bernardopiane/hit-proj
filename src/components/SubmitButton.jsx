import React from 'react'
import styled from 'styled-components';

const MyButton = styled.button`
    align-self: center;
    border: none;
    color: white;
    background-color: #373735;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    padding: 16px 57px;
`;

export default function SubmitButton({ children, ...props }) {
  return (
    <MyButton>{children}</MyButton>
  )
}
