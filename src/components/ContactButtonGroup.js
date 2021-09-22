import React from "react";
import Styled from "styled-components";
import Button from "../tenbajt/Button";
import ButtonGroup from "../tenbajt/ButtonGroup";
import { breakpoint, color } from "../tenbajt/constants";

const Layout = Styled(ButtonGroup)`
    padding: 0 0.75rem 0.75rem;
    grid-template-columns: repeat(2, 1fr);
    ${breakpoint.md} {
        display: none;
    }
`;

const PrimaryButton = Styled(Button)`
    color: ${color.white()};
    background-color: ${color.blue(600)};
`;

export default function ContactButtonGroup() {
    return (
        <Layout>
            <PrimaryButton forwardedAs="a" href="tel:+48798921454" caption="(+48) 798 921 454">
                Zadzwoń
            </PrimaryButton>
            <Button forwardedAs="a" href="mailto:biuro@tenbajt.pl" caption="biuro@tenbajt.pl">
                Wyślij e-mail
            </Button>
        </Layout>
    );
}