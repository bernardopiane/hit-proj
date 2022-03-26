import React from 'react'
import styled from 'styled-components';
import AreaTextInput from '../components/AreaTextInput';
import Box from '../components/Box';
import SubmitButton from '../components/SubmitButton';
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
    // On small screens change flex direction to column
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export default function Contato() {
    return (
        <Layout>
            <TitleArea>
                <Title>Contato</Title>
            </TitleArea>
            <Box>
                <Row>
                    <TextInput type="text" id="nome">Nome*</TextInput>
                    <TextInput type="email" id="email">E-mail*</TextInput>
                </Row>
                <AreaTextInput>Mensagem*</AreaTextInput>
                <SubmitButton>
                    Enviar
                </SubmitButton>
            </Box>

        </Layout>
    )
}
