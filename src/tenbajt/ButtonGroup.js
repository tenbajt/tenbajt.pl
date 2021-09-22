import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    display: grid;
    gap: 0.75rem;
    grid-auto-flow: column;
`;

const ButtonGroup = props => (
    <Container className={props.className}>
        {props.children}
    </Container>
);

export default ButtonGroup;