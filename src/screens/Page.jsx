import React from 'react'
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../components/Box';
import Button from '../components/Button';
import Title from '../components/Title';
import Contato from './Contato';
import Introducao from './Introducao';

const Layout = styled.div`
    background-color: #2d2d2d;
    padding-top: 100px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImgArea = styled.div`
    padding-bottom: 59px;
`;

const BtnArea = styled.div`
    display: flex;
    gap: 17px;
    flex-direction: row;
    padding-bottom: 49px;
    // On small screens change flex direction to column
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export default function Page() {
    return (
        <Layout>
            <ImgArea>
                <img src="images/logo-hit-branco.png" alt="" />
            </ImgArea>
            <BtnArea>
                <Button path="/">Introdução</Button>
                <Button path="/contact">Contato</Button>
            </BtnArea>
            <Routes>
                <Route path="/" exact element={<Introducao />} />
                <Route path="/contact" element={<Contato />} />
            </Routes>


        </Layout>
    )
}
