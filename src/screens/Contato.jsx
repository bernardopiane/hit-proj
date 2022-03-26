import React from 'react'
import styled from 'styled-components';
import AreaTextInput from '../components/AreaTextInput';
import Box from '../components/Box';
import TextInput from '../components/TextInput';
import Title from '../components/Title';

const TitleArea = styled.div`
    padding-bottom: 30px;
`;

const Layout = styled.div`
    background-color: #2d2d2d;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 17px;
`;

export default function Contato() {
    return (
        <Layout>
            <TitleArea>
                <Title>Contato</Title>
            </TitleArea>
            <Box>
                <Row>
                    <TextInput>Nome*</TextInput>
                    <TextInput>E-mail*</TextInput>
                </Row>
                <AreaTextInput>Mensagem*</AreaTextInput>
            </Box>

        </Layout>
    )
}
