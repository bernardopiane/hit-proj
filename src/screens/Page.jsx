import React from 'react'
import styled from 'styled-components';
import Button from '../components/Button';

const Layout = styled.div`
    background-color: #2d2d2d;
    padding-top: 100px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Spacing = styled.div`
    display: flex;
    gap: 17px;
    flex-direction: row;
`

export default function Page() {
    return (
        <Layout>
            <img src="images/logo-hit-branco.png" alt="" />
            <Spacing>
                <Button>Introdução</Button>
                <Button>Contato</Button>
            </Spacing>
            <div>Divider</div>
            <div>Container</div>
        </Layout>
    )
}
