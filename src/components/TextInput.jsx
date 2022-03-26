import React from 'react'
import styled from 'styled-components';

const MyTextInput = styled.input`
    padding: 10px 18px;
    min-width: 290px;
    border: none;
    border-radius: 5px;
    font-size: 13px;
    font-family: 'Montserrat', sans-serif;
    line-height: 24px;
    &:focus {
        outline: none;
    }
`;

export default function TextInput({ children, ...props }) {
    return (
        <MyTextInput type={props.type} name={props.id} id={props.id} placeholder={children} />
    )
}
