import React from 'react'
import styled from 'styled-components';


const MyBox = styled.div`
    padding: 40px;
    background-color: #ea916b;
    max-width: 780px;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    line-height: 24px;
    font-weight: 300;
`;

export default function Box({ children, ...props }) {
    return (
        <MyBox>{children}</MyBox>
    )
}
