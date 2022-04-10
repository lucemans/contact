import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const NavBar = () => {

    return (
        <Wrapper>
            <luc-header></luc-header>
            {/* <Nav>
                <Link href="/">
                    <Img src="https://avatars.githubusercontent.com/u/10339043?v=4" alt="Profile Picture" />
                </Link>
                <Links>
                    <Link href="https://luc.computer/">computer</Link>
                    <LinkDivider />
                    <Link href="https://discord.gg/RUvPQxXUUE" target="_blank">devtalk</Link>
                    <LinkDivider />
                    <Link href="https://luc.contact/secret" target="_blank">secret</Link>
                </Links>
            </Nav> */}
        </Wrapper>
    )
};