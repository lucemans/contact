/* eslint-disable no-undef */
import { Organization } from 'types/organization.type';
import { Repository } from 'types/repository.type';
import { Skill } from 'types/skill.type';

export const Profile: {
    technologies: Skill[];
    languages: Skill[];
    tools: Skill[];
    database: Skill[];
    orgs: Organization[];
    repos: Repository[];
    // packages
} = {
    technologies: [
        {
            label: 'react',
            image: require('url:/assets/skills/react.png'),
            description: 'front-end JavaScript library',
            relatedTechnologies: [
                {
                    label: 'nextjs',
                },
                {
                    label: 'gatsby',
                },
                {
                    label: 'react-static',
                },
            ],
        },
        {
            label: 'kubernetes',
            image: require('url:/assets/skills/kubernetes.svg'),
            description: 'container-orchestration system',
            relatedTechnologies: [
                {
                    label: 'docker',
                },
                {
                    label: 'distributed',
                },
                {
                    label: 'traefik',
                },
            ],
        },
        {
            label: 'nodejs',
            image: require('url:/assets/skills/nodejs.png'),
            description: 'server-side javascript',
        },
        {
            label: 'vue',
            image: require('url:/assets/skills/vue.svg'),
            description: 'front-end JavaScript framework',
        },
        {
            label: 'angular',
            image: require('url:/assets/skills/angular.png'),
            description: 'front-end JavaScript framework',
        },
        {
            label: 'styled-components',
            image: require('url:/assets/skills/styled-components.png'),
            description: 'react css styling in js',
        },
    ],
    languages: [
        {
            label: 'javascript',
            image: require('url:/assets/skills/javascript.png'),
        },
        {
            label: 'typescript',
            image: require('url:/assets/skills/typescript.svg'),
        },
        {
            label: 'java',
            image: require('url:/assets/skills/java.svg'),
        },
        {
            label: 'python',
            image: require('url:/assets/skills/python.png'),
        },
        {
            label: 'bash',
            image: require('url:/assets/skills/bash.svg'),
        },
        {
            label: 'sass/scss',
            image: require('url:/assets/skills/sass.svg'),
        },
        {
            label: 'deno',
            image: require('url:/assets/skills/deno.png'),
        },
    ],
    tools: [
        {
            label: 'docker',
            image: require('url:/assets/skills/docker.png'),
        },
        {
            label: 'parcel',
            image: require('url:/assets/skills/parcel.ico'),
        },
        {
            label: 'ansible',
            image: require('url:/assets/skills/ansible.png'),
        },
        {
            label: 'terraform',
            image: require('url:/assets/skills/terraform.svg'),
        },
        {
            label: 'git',
            image: require('url:/assets/skills/git.svg'),
        },
        {
            label: 'npm',
            image: require('url:/assets/skills/npm.svg'),
        },
        {
            label: 'yarn',
            image: require('url:/assets/skills/yarn.svg'),
        },
    ],
    database: [
        {
            label: 'scylla',
            image: require('url:/assets/skills/scylla.svg'),
        },
        {
            label: 'cassandra',
            image: require('url:/assets/skills/cassandra.svg'),
        },
        {
            label: 'redis',
            image: require('url:/assets/skills/redis.svg'),
        },
        {
            label: 'mongodb',
            image: require('url:/assets/skills/mongo.svg'),
        },
        {
            label: 'postgresql',
            image: require('url:/assets/skills/postgresql.svg'),
        },
    ],
    orgs: [
        {
            label: 'The Sting',
            image: require('url:/assets/experience/tsting.jpeg'),
            color: '#fff',
            start_date: '3 Mar 2022',
            url: 'https://thesting.com/',
            tags: ['react', 'typescript'],
        },
        {
            label: 'Heineken',
            image: require('url:/assets/experience/heineken-corporate.svg'),
            color: '#fff',
            start_date: '28 Nov 2021',
            end_date: '3 Mar 2022',
            url: 'https://heineken.com/',
            tags: ['react', 'typescript'],
        },
        {
            label: 'Triple',
            image: require('url:/assets/experience/triple.svg'),
            color: '#0E0940',
            start_date: '28 Nov 2021',
            end_date: '3 Mar 2022',
            url: 'https://wearetriple.com/',
            tags: ['react', 'typescript'],
        },
        {
            label: 'Passionate People',
            image: require('url:/assets/experience/pp.png'),
            color: '#171717',
            start_date: '1 Nov 2021',
            url: 'https://passionatepeople.io/',
            tags: ['react', 'typescript', 'next', 'vuejs', 'eth'],
        },
        {
            label: 'Codana',
            image: require('url:/assets/experience/codana.png'),
            color: '#8400ff',
            start_date: '1 Feb 2021',
            end_date: '31 Oct 2021',
            url: 'https://codana.eu/',
            tags: ['react', 'typescript', 'gatsby', 'storyblok', 'storybook', 'nx'],
        },
        {
            label: 'EForumFactory',
            image: require('url:/assets/experience/eff2.png'),
            color: '#fff',
            start_date: '1 Jan 2018',
            end_date: '1 Feb 2021',
            url: 'https://eforumfactory.be/',
            tags: ['react', 'typescript', 'angular', 'electron', 'vuejs', 'ionic'],
        },
    ],
    repos: [
        {
            type: 'github',
            color: '#121212',
            image: 'https://avatars.githubusercontent.com/u/76572014?s=200&v=4',
            label: '@lvksh/logger',
            description:
                'Zero dependency, light-weight, blazing fast customizable logging library',
            language: 'typescript',
            link: 'https://github.com/lvkdotsh/logger',
        },
        {
            type: 'github',
            color: '#121212',
            image: 'https://avatars.githubusercontent.com/u/76572014?s=200&v=4',
            label: 'scyllo',
            description:
                "The Cassandra/Scylla library you didn't want but got anyways.",
            language: 'typescript',
            link: 'https://github.com/lvkdotsh/scyllo',
        },
        {
            type: 'github',
            color: '#121212',
            image: 'https://avatars.githubusercontent.com/u/76572014?s=200&v=4',
            label: 'sunflake',
            description: 'Zero dependency, lightweight, snowflake generator',
            language: 'typescript',
            link: 'https://github.com/lvkdotsh/sunflake',
        },
        {
            type: 'github',
            color: '#121212',
            image: 'https://avatars.githubusercontent.com/u/76572014?s=200&v=4',
            label: 'javascript',
            description:
                'Official lvkdotsh javascript/typescript style-guide and linting rules',
            language: 'javascript',
            link: 'https://github.com/lvkdotsh/javascript',
        },
        {
            type: 'github',
            color: '#121212',
            image: 'https://avatars.githubusercontent.com/u/76572014?s=200&v=4',
            label: 'react-template',
            description: 'Thin React Template to build React Apps',
            language: 'typescript',
            link: 'https://github.com/lvkdotsh/react-template',
        },
        {
            type: 'github',
            color: '#121212',
            image: 'https://avatars.githubusercontent.com/u/76572014?s=200&v=4',
            label: 'signal-edge',
            description: 'A self built edge server based on signalfs',
            language: 'typescript',
            link: 'https://github.com/lvkdotsh/signal-edge',
        },
    ],
};
