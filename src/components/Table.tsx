import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ width: string; mobileWidth: string }>`
    position: relative;
    border: 1px solid #686868;
    break-inside: avoid;
    width: ${({ width }) => width};
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 765px) {
        width: ${({ mobileWidth }) => mobileWidth};
    }
`;

const Header = styled.div`
    position: absolute;
    left: 1rem;
    transform: translateY(-50%);
    background: var(--theme-bg);
    padding: 0.35em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media screen and (max-width: 500px) {
        max-width: 240px;
    }

    /* padding: 1rem 1rem 1rem 1rem; */
    /* border-bottom: 1px dotted #686868; */
    /* display: flex; */
    /* justify-content: space-between; */
`;
const SideHeader = styled.div`
    position: absolute;
    right: 1rem;
    transform: translateY(-50%);
    background: var(--theme-bg);
    padding: 0.35em;
`;

const Body = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Column = styled.div`
    padding: 1.4rem;
    flex: 1;
    min-height: 100%;
`;

const Columns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    overflow: hidden;
    word-wrap: break-word;
    ${Column} + ${Column} {
        border-left: 1px dotted #686868;
    }
    @media screen and (max-width: 765px) {
        flex-direction: column;
        ${Column} + ${Column} {
            border-left: 0;
            border-top: 1px dotted #686868;
        }
    }
`;

export const Table: FC<{
    header: React.ReactNode | null;
    children: React.ReactNode | (() => React.ReactNode[]);
    sideHeader?: React.ReactNode;
    width?: string;
    mobileWidth?: string;
}> = ({ children, header, sideHeader, width, mobileWidth }) => {
    return (
        <Wrapper width={width} mobileWidth={mobileWidth}>
            {header && <Header>{header}</Header>}
            {sideHeader && <SideHeader>{sideHeader}</SideHeader>}
            <Body>
                {typeof children == 'function' ? (
                    <Columns>
                        {' '}
                        {children().map(
                            (column: React.ReactNode, index: number) => column
                        )}
                    </Columns>
                ) : (
                    <Column>{children}</Column>
                )}
            </Body>
        </Wrapper>
    );
};
