import React from 'react'
import styled from 'styled-components';
import Button from '../components/Button';
import Title from '../components/Title';

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

const TitleArea = styled.div`
    padding-bottom: 30px;
`;

export default function Page() {
    return (
        <Layout>
            <ImgArea>
                <img src="images/logo-hit-branco.png" alt="" />
            </ImgArea>
            <BtnArea>
                <Button>Introdução</Button>
                <Button>Contato</Button>
            </BtnArea>
            <TitleArea>
                <Title>Introdução</Title>
            </TitleArea>
            <div>Container</div>
        </Layout>
    )
}
