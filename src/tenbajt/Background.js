import React from "React";
import Styled from "styled-components";

const Container = Styled.div`
    top: 0;
    left: 50%;
    width: 100vw;
    bottom: 0;
    z-index: -1;
    position: absolute;
    transform: translateX(-50%);
`;

const Background = props => (
    <Container className={props.className} style={props.style}/>
);

export default Background;