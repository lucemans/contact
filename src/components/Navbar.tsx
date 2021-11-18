import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Nav = styled.nav`
    width: 900px;
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    margin: 0 1rem 2rem 1rem;
    border-bottom: 1px dotted #686868;
`;

const Links = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const Link = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const LinkDivider = styled.div`
    :before {
        content: '/';
        color: #686868;
    }
`;

const Img = styled.img`
    height: 2em;
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
    width: auto;
`;

export const NavBar = () => {

    return (
        <Wrapper>
            <Nav>
                <Link href="/">
                    <Img src="https://avatars.githubusercontent.com/u/10339043?v=4" alt="Profile Picture" />
                </Link>
                <Links>
                    <Link href="https://luc.computer/">computer</Link>
                    <LinkDivider />
                    <Link href="https://luc.contact/">CONTACT</Link>
                </Links>
            </Nav>
        </Wrapper>
    )
};