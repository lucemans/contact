import React from 'react';
import styled from 'styled-components';
import { Table } from '../components/Table';

const ProfilePictureContainer = styled.div`
    width: 200px;
`;

const ProfilePicture = styled.img`
    width: 100%;
`;

const Properties = styled.div`
    a {
        color: var(--color-main);
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const KeyValue = styled.div`
    display: flex;
`;

const Key = styled.b``;

const Value = styled.div``;

export const BasicInfo = () => {

    return (
        <Table header="Basic Info">
            {
                () => [
                    <ProfilePictureContainer>
                        <ProfilePicture src="https://avatars.githubusercontent.com/u/10339043?v=4" alt="" />
                    </ProfilePictureContainer>,
                    <Properties>
                        {
                            [
                                ['Name', 'Luc van Kampen'],
                                ['Bio', 'Create Epic Shit'],
                                ['Tel', <a href="tel:0031618925911" target="_blank">+31 618 925 911</a>],
                                ['Github', <a href="https://github.com/lucemans" target="_blank">lucemans</a>],
                                ['Twitter', <a href="https://twitter.com/lucemansnl" target="_blank">@lucemansnl</a>],
                                ['Linkedin', <a href="https://linkedin.com/in/lucemans" target="_blank">Luc van Kampen</a>],
                                ['Eth', 'lucemans.eth'],
                                ['PGP Key', <a href="https://luc.contact/public/lucemans.asc" target="_blank">69F2 4A82 16AA E27D 2D2A<br />428C E6D8 1E8E EC87 269A</a>]
                            ].map((a, i) => (
                                <KeyValue key={i}>
                                    <Key>
                                        {a[0]}
                                    </Key>:&nbsp;
                                    <Value>
                                        {a[1]}
                                    </Value>
                                </KeyValue>
                            ))
                        }
                    </Properties>
                ]
            }
        </Table>
    );
};