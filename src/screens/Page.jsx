import React from 'react'
import styled from 'styled-components';
import Box from '../components/Box';
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
            <Box>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <br />
                <div>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>
            </Box>
        </Layout>
    )
}
