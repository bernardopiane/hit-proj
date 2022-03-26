import React from 'react'
import styled from 'styled-components';

const MyTextInput = styled.textarea`
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


export default function AreaTextInput({ children, ...props }) {
    return (
        <MyTextInput type="text" name="" id="" placeholder={children} rows={10} cols={20} />
    )
}
