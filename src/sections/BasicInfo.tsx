import { UserPlus, Twitter, GitHub, Linkedin, Youtube } from 'react-feather';
import styled from 'styled-components';
import ethereum from 'url:../../assets/skills/ethereum.webp';
import telegram from 'url:../../assets/skills/telegram.png';
import { useMediaQuery } from 'react-responsive';

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
    display: flex;
    flex-direction: column;
    flex: 1;
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

export const Socials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    align-self: center;
    justify-self: flex-end;
    justify-content: flex-start;
    margin-top: auto;
    flex-grow: 1;
    align-items: flex-end;
    margin-top: 1rem;
    img {
        height: 1.4rem;
    }
    > a {
        &:hover {
            transform: scale(1.1);
        }
    }
`;

const DesktopInfo = () => {
    return (
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
                    <a href="https://github.com/lucemans" target="_blank">
                        lucemans
                    </a>,
                ],
                [
                    'Twitter',
                    <a href="https://twitter.com/lucemansnl" target="_blank">
                        @lucemansnl
                    </a>,
                ],
                [
                    'Linkedin',
                    <a href="https://linkedin.com/in/lucemans" target="_blank">
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
                    </a>,
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
    );
};

const MobileInfo = () => {
    return (
        <>
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
                <Socials>
                    {[
                        {
                            e: <Twitter />,
                            a: 'https://twitter.com/lucemansnl',
                            l: 'Twitter'
                        },
                        {
                            e: <GitHub />,
                            a: 'https://github.com/lucemans',
                            l: 'Github',
                        },
                        {
                            e: <Linkedin />,
                            a: 'https://linkedin.com/in/lucemans',
                            l: 'Linkedin',
                        },
                        {
                            e: <Youtube />,
                            a: 'https://www.youtube.com/c/Lucemans',
                            l: 'Youtube',
                        },
                        {
                            e: <img src={telegram} />,
                            a: 'https://t.me/lucemans',
                            l: 'Telegram',
                        },
                        {
                            e: <img src={ethereum} />,
                            a: 'https://etherscan.io/address/lucemans.eth',
                            l: 'Ethereum Address',
                        },
                    ].map((v) => (
                        <a href={v.a} target="_blank" aria-label={v.l}>
                            {v.e}
                        </a>
                    ))}
                </Socials>
            </Properties>
        </>
    );
};

export const BasicInfo = () => {
    const isDesktopOrMobile = useMediaQuery({ query: '(min-width: 900px)' });

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
                    {isDesktopOrMobile ? <DesktopInfo /> : <MobileInfo />}
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
