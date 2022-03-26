import React from 'react'
import styled from 'styled-components';

const MyTitle = styled.div`
    font-size: 22px;
    color: white;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #707070;
    border: 1px solid #515151;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
`;

const Absolute = styled.div`
    position: absolute;
    // Center the divider
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    height: 6px;
    width: 20px;
    background: rgb(234,145,107);
    background: linear-gradient(180deg, rgba(234,145,107,1) 0%, rgba(224,90,77,1) 100%);
`;

export default function Title({ children, ...props }) {
    return (
        <div>
            <MyTitle>{children}</MyTitle>
            <Divider>
                <Absolute />
            </ Divider>
        </div>
    )
}
