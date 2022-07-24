import React, { FC } from 'react';
import styled from 'styled-components';

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

export const Table: FC<{
    header: React.ReactNode | null;
    children: React.ReactNode | (() => React.ReactNode[]);
    sideHeader?: React.ReactNode;
    width?: string;
    mobileWidth?: string;
}> = ({ children, header, sideHeader, width, mobileWidth }) => {
    return (
        <div
            className="relative border border-neutral-600 break-inside-avoid flex flex-col"
            style={{ width }}
        >
            {header && <Header className="header">{header}</Header>}
            {sideHeader && <SideHeader>{sideHeader}</SideHeader>}
            <div className="flex flex-1 flex-col">
                {typeof children == 'function' ? (
                    <div className="columns flex flex-col overflow-hidden break-words w-full md:flex-row">
                        {' '}
                        {children().map(
                            (column: React.ReactNode, index: number) => column
                        )}
                    </div>
                ) : (
                    <div className="column">{children}</div>
                )}
            </div>
        </div>
    );
};
