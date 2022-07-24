import { FC } from 'react';

import edgeserverLogo from '../../public/logos/edgeserver.svg';
import errorFnsLogo from '../../public/logos/error-fns.svg';
import grantrLogo from '../../public/logos/grantr.png';
import permissioLogo from '../../public/logos/permissio.svg';
import scylloLogo from '../../public/logos/scyllo.png';
import sunflakeLogo from '../../public/logos/sunflake.svg';
import loggerLogo from '../../public/logos/sunflake.svg';
import pogLogo from '../../public/logos/pog.png';
import tictacsoLogo from '../../public/logos/tictacso.svg';

type RepoCard = {
    logo: string;
    color: string;
    name: string;
    description: string;
    url: string;
};

const Repos: RepoCard[] = [
    {
        logo: grantrLogo,
        name: 'Grantr',
        description:
            'Grantr is a grant-program aggregator for web3 projects in need of funding.',
        color: '#ffcc00',
        url: 'https://grantr.app',
    },
    {
        logo: edgeserverLogo,
        name: 'Edgeserver',
        description:
            'Edgeserver is the fastest open-source webserver for static file hosting.',
        color: '#e32fee',
        url: 'https://edgeserver.io',
    },
    {
        logo: scylloLogo,
        name: 'Scyllo',
        description:
            "The Cassandra/Scylla library you didn't want but got anyways.",
        color: '#57d1e5',
        url: 'https://www.npmjs.com/package/scyllo',
    },
    {
        logo: loggerLogo,
        name: '@lvksh/logger',
        description:
            'Zero dependency light-weight, blazing fast customizable logging library',
        color: '#555',
        url: 'https://www.npmjs.com/package/@lvksh/logger',
    },
];

const SmallRepos: RepoCard[] = [
    {
        logo: grantrLogo,
        name: 'Grantr',
        description:
            'Grantr is a grant-program aggregator for web3 projects in need of funding.',
        color: '#ffcc00',
        url: 'https://grantr.app',
    },
    {
        logo: edgeserverLogo,
        name: 'Edgeserver',
        description:
            'Edgeserver is the fastest open-source webserver for static file hosting.',
        color: '#e32fee',
        url: 'https://edgeserver.io',
    },
    {
        logo: scylloLogo,
        name: 'Scyllo',
        description:
            "The Cassandra/Scylla library you didn't want but got anyways.",
        color: '#57d1e5',
        url: 'https://www.npmjs.com/package/scyllo',
    },
    {
        logo: errorFnsLogo,
        name: 'error-fns',
        description: 'Something with errors ig',
        color: '#F99F56',
        url: 'https://www.npmjs.com/package/error-fns',
    },
    {
        logo: permissioLogo,
        name: 'permissio',
        description: 'compact bigint bitfield permission library for node.js',
        color: '#A243E3',
        url: 'https://www.npmjs.com/package/permissio',
    },
    {
        logo: sunflakeLogo,
        name: 'sunflake',
        description: 'Zero dependency, lightweight, snowflake generator',
        color: '#7BA5D1',
        url: 'https://www.npmjs.com/package/sunflake',
    },
    {
        logo: loggerLogo,
        name: '@lvksh/logger',
        description:
            'Zero dependency, light-weight, blazing fast customizable logging library',
        color: '#555',
        url: 'https://www.npmjs.com/package/@lvksh/logger',
    },
    {
        logo: pogLogo,
        name: 'Proof of Grass',
        description: 'A movement about going outside and touching grass 🌱',
        color: '#E2B165',
        url: 'https://twitter.com/pogdotearth',
    },
    {
        logo: tictacsoLogo,
        name: 'TicTac.So',
        description:
            'Over-engineered TicTacToe on the Blockchain using Solidity',
        color: '#eee',
        url: 'https://tictac.so',
    },
];

const Repository: FC<{ repository: RepoCard }> = ({ repository }) => {
    return (
        <div
            className="flex flex-row justify-start sm:justify-start sm:flex-col items-center sm:p-4 w-full border-2 rounded-md"
            style={{ borderColor: repository.color }}
        >
            <div
                className="py-4 sm:px-0 pl-4 pr-3 border-r sm:border-r-0"
                style={{ borderColor: repository.color }}
            >
                <img
                    src={repository.logo}
                    className="w-12"
                    alt={repository.name}
                />
            </div>
            <p className="text-base text-center px-4 pb-4 md:block hidden">
                {repository.description}
            </p>
            <h3
                className="text-base text-center font-bold px-4 sm:hidden"
                style={{ color: repository.color }}
            >
                {repository.name}
            </h3>
        </div>
    );
};

const SmallRepository: FC<{ repository: RepoCard }> = ({ repository }) => {
    return (
        <a
            href={repository.url}
            target="_blank"
            className="flex flex-col hover:scale-105 cursor-pointer"
        >
            <img
                src={repository.logo}
                className="h-20 mx-auto py-4"
                alt={repository.name}
            />
            <span
                className="text-base text-center px-4 pb-4"
                style={{ color: repository.color }}
            >
                {repository.name}
            </span>
        </a>
    );
};

export const Repositories = () => {
    return (
        <div>
            <div className="grid-cols-1 sm:grid-cols-2 grid gap-4">
                {Repos.map((repository) => (
                    <Repository repository={repository} />
                ))}
            </div>

            <div className="flex flex-wrap gap-4 py-4 justify-center">
                {SmallRepos.map((repository) => (
                    <SmallRepository repository={repository} />
                ))}
            </div>
        </div>
    );
};

// <>
// <OrgInfo>
//     <Book/>
//     {/* <OrgIcon
//         src={a.image}
//         alt={a.label + "logo"}
//         color={a.color}
//     /> */}
//     <OrgName>{a.label}</OrgName>
// </OrgInfo>
// </><OrgDescription>{a.description}</OrgDescription>
