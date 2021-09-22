import React from "react";
import Styled from "styled-components";
import { breakpoint, color, text } from "../tenbajt/constants";

const Layout = Styled.div`
    gap: 0.75rem 2.5rem;
    display: none;
    padding: 1.5rem 1rem;
    border-top: 1px solid ${color.gray(200)};
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, auto);
    ${breakpoint.md} {
        display: grid;
    }
`;

const Label = Styled.span`
    color: ${color.gray(700)};
    font-size: ${text.sm.size};
    line-height: 1;
`;

const Link = Styled.a`
    gap: 0 0.25rem;
    color: ${color.gray(700)};
    display: grid;
    position: relative;
    font-size: ${text.sm.size};
    line-height: 1;
    align-items: center;
    grid-auto-flow: column;
    justify-content: start;
    &::after {
        inset: -0.375rem -0.625rem;
        content: "";
        z-index: -1;
        position: absolute;
        transition: background-color 150ms;
        border-radius: 9999px;
    }
    &:hover::after {
        background-color: ${color.blue(100)};
    }
`;

const Icon = Styled.i`
    font-size: ${text.base.size} !important;
`;

const ContactDetails = () => (
    <Layout>
        <Label>
            Skontaktuj się z nami:
        </Label>
        <Link href="tel:+48798921454">
            <Icon className="material-icons">
                phone_iphone
            </Icon>
            (+48) 798 921 454
        </Link>
        <Link href="mailto:biuro@tenbajt.pl">
            <Icon className="material-icons">
                mail
            </Icon>
            biuro@tenbajt.pl
        </Link>
    </Layout>
);

export default ContactDetails;