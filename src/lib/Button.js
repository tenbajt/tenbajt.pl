import React from "react";
import Styled from "styled-components";
import { breakpoint, color, shadow, text } from "./constants";

const Container = Styled.button`
    width: 100%;
    color: ${color.gray(700)};
    border: 1px solid ${color.gray(300)};
    display: inline-grid;
    padding: 0.5rem 1rem;
    font-size: ${text.base.size};
    box-shadow: ${shadow.sm};
    font-weight: 500;
    align-items: center;
    line-height: ${text.base.height};
    align-content: center;
    justify-items: center;
    border-radius: 0.25rem;
    justify-content: center;
    background-color: white;
    ${breakpoint.sm} {
        width: auto;
        font-size: ${text.sm.size};
        line-height: ${text.sm.height};
    }
`;

const Caption = Styled.span`
    font-size: ${text.xs.size};
    font-weight: 400;
    line-height: ${text.xs.height};
`;

const Button = props => (
    <Container className={props.className} as={props.as} href={props.href}>
        {props.children}
        {props.caption && <Caption>{props.caption}</Caption>}
    </Container>
)

export default Button;