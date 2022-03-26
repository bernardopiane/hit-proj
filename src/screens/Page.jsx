import React from 'react'
import styled from 'styled-components';

const Layout = styled.div`
    background-color: #2d2d2d;
    padding-top: 100px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Page() {
    return (
        <Layout>
            <img src="images/logo-hit-branco.png" alt="" />
            <div>
                <buttun>btn1</buttun>
                <buttun>btn2</buttun>
            </div>
            <div>Divider</div>
            <div>Container</div>
        </Layout>
    )
}
