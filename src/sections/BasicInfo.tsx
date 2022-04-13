import { UserPlus } from 'react-feather';
import styled from 'styled-components';

import { Column, Table } from '../components/Table';

const CColumn = styled(Column)`
    flex: 0;
    display: flex;
    justify-content: space-between;
`;

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

const Icon = styled.div<{ mobile: boolean }>`
    display: ${({ mobile }) => (mobile ? 'none' : 'block')};
    color: var(--theme-text-main);
    svg {
        width: 1.4em;
        height: 1.4em;
    }
    @media screen and (max-width: 765px) {
        display: ${({ mobile }) => (mobile ? 'block' : 'none')};
        svg {
            width: 1.8em;
            height: 1.8em;
        }
    }
`;

const DColumn = styled(Column)`
    display: flex;
    justify-content: space-between;
`;

export const BasicInfo = () => {
    return (
        <Table header="Basic Info">
            {() => [
                <CColumn>
                    <ProfilePictureContainer>
                        <ProfilePicture
                            src="https://header.luc.computer/public/500x500.webp"
                            alt="Profile Picture"
                            width="200"
                            height="200"
                        />
                    </ProfilePictureContainer>
                    <a href="/public/lucemans.vcf" aria-label="Add to Contacts">
                        <Icon mobile={true}>
                            <UserPlus />
                        </Icon>
                    </a>
                </CColumn>,
                <DColumn>
                    <Properties>
                        {[
                            ['Name', 'Luc van Kampen'],
                            ['Bio', 'Create Epic Shit'],
                            [
                                'Tel',
                                <a href="tel:0031618925911" target="_blank">
                                    +31 618 925 911
                                </a>,
                            ],
                            [
                                'Github',
                                <a
                                    href="https://github.com/lucemans"
                                    target="_blank"
                                >
                                    lucemans
                                </a>,
                            ],
                            [
                                'Twitter',
                                <a
                                    href="https://twitter.com/lucemansnl"
                                    target="_blank"
                                >
                                    @lucemansnl
                                </a>,
                            ],
                            [
                                'Linkedin',
                                <a
                                    href="https://linkedin.com/in/lucemans"
                                    target="_blank"
                                >
                                    Luc van Kampen
                                </a>,
                            ],
                            [
                                'Youtube',
                                <a
                                href="https://www.youtube.com/c/Lucemans"
                                target="_blank"
                                >
                                    c/lucemans
                                </a>
                            ],
                            ['Eth', 'lucemans.eth'],
                            [
                                'PGP Key',
                                <a
                                    href="https://luc.contact/public/lucemans.asc"
                                    target="_blank"
                                >
                                    69F2 4A82 16AA E27D 2D2A
                                    <br />
                                    428C E6D8 1E8E EC87 269A
                                </a>,
                            ],
                        ].map((a, index) => (
                            <KeyValue key={index}>
                                <Key>{a.at(0)}</Key>:&nbsp;
                                <Value>{a.at(1)}</Value>
                            </KeyValue>
                        ))}
                    </Properties>
                    <a href="/public/lucemans.vcf" aria-label="Add to Contacts">
                        <Icon mobile={false}>
                            <UserPlus />
                        </Icon>
                    </a>
                </DColumn>,
            ]}
        </Table>
    );
};
