import React from "react";
import Styled from "styled-components";
import { breakpoint, color, shadow } from "./constants";

const Container = Styled.div`
    padding: 1.25rem 1rem;
    box-shadow: ${shadow.base};
    border-radius: 0.75rem;
    background-color: ${color.white()};
    ${breakpoint.sm} {
        padding: 1.5rem;
    }
`;

const Card = React.forwardRef((props, ref) => (
    <Container red={ref} className={props.className}>
        {props.children}
    </Container>
));

export default Card;