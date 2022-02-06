import React, { FC } from 'react';
import styled from 'styled-components';

import { merge } from '~/utils/merge';

const Wrapper = styled.div<{ width: string; mobileWidth: string }>`
    border: 1px dotted #686868;
    break-inside: avoid;
    width: ${({ width }) => width};
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 765px) {
        width: ${({ mobileWidth }) => mobileWidth};
    }
`;

const Header = styled.div`
    padding: 1rem 1rem 1rem 1rem;
    border-bottom: 1px dotted #686868;
    display: flex;
    justify-content: space-between;
`;

const Body = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Column = styled.div`
    padding: 1rem;
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
            {header && (
                <Header>
                    {header}
                    <div>{sideHeader}</div>
                </Header>
            )}
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
