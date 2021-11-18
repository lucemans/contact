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
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const KeyValue = styled.div`
`;

const Key = styled.b``;

const Value = styled.span``;

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
                                ['Github', <a href="https://github.com/lucemans" target="_blank">https://github.com/lucemans</a>],
                                ['Twitter', <a href="https://twitter.com/lucemans" target="_blank">@lucemansnl</a>],
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