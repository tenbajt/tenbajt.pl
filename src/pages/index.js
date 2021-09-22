import Head from "react-helmet";
import React from "react";
import Style from "../lib/Style";
import Styled from "styled-components";
import ContactDetails from "../components/ContactDetails";
import ContactButtonGroup from "../components/ContactButtonGroup";
import { breakpoint, color, text } from "../lib/constants";

const Layout = Styled.div`
    display: grid;
    min-height: 100%;
    grid-template-rows: auto auto auto 1fr auto;
`;

const Logo = Styled.img`
    height: 2rem;
    margin: 0.75rem auto 0;
    ${breakpoint.md} {
        margin-top: 1rem;
    }
`;

const Heading = Styled.h1`
    margin: 5.5rem 1rem 0;
    font-size: ${text.xl2.size};
    text-align: center;
    font-weight: 800;
    line-height: ${text.xl2.height};
    ${breakpoint.xs} {
        margin-top: 6rem;
    }
    ${breakpoint.xs} {
        font-size: ${text.xl3.size};
        line-height: ${text.xl3.height};
    }
    ${breakpoint.md} {
        font-size: ${text.xl5.size};
        margin-top: 8rem;
        line-height: ${text.xl5.height};
    }
    ${breakpoint.lg} {
        margin-top: 6rem;
    }
`;

const Apology = Styled.p`
    color: ${color.gray(900)};
    margin: 0.5rem 0 0;
    font-size: ${text.base.size};
    text-align: center;
    font-weight: 400;
    line-height: ${text.base.height};
    ${breakpoint.md} {
        margin-top: 1.5rem;
    }
`;

const Image = Styled.img`
    width: 100%;
    padding: 2rem 1rem 1.5rem;
    align-self: center;
    justify-self: center;
    ${breakpoint.md} {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    ${breakpoint.lg} {
        max-width: 35rem;
    }
`;

const Index = () => (
    <React.Fragment>
        <Head>
            <title>Tenbajt - Outsourcing IT Poznań | Usługi informatyczne dla biznesu</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
            <link rel="icon" href="/images/logo/32x32.png" size="32x32"/>
            <link rel="icon" href="/images/logo/192x192.png"sizes="192x192"/>
            <link rel="apple-touch-icon" href="/images/logo/180x180.png"/>
            <meta name="msapplication-TileImage" content="/images/logo/270x270.png"/>
        </Head>
        <Style/>
        <Layout>
            <Logo src="/images/logo/full.svg"/>
            <Heading>
                Obecnie wprowadzamy<br/>zmiany na naszej stronie
            </Heading>
            <Apology>
                Przepraszamy za wszelkie niedogodności.<br/>Zapraszamy wkrótce.
            </Apology>
            <Image src="/images/construction.svg"/>
            <ContactButtonGroup/>
            <ContactDetails/>
        </Layout>
    </React.Fragment>
);

export default Index;
