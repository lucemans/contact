import { Organization } from "types/organization.type";
import { Repository } from "types/repository.type";
import { Skill } from "types/skill.type";

export const Profile: {
    technologies: Skill[],
    languages: Skill[],
    tools: Skill[],
    database: Skill[],
    orgs: Organization[],
    repos: Repository[]
    // packages
} = {
    technologies: [
        {
            label: 'react',
            image: require('url:/assets/skills/react.png'),
            description: 'front-end JavaScript library',
            relatedTechnologies: [
                {
                    label: 'nextjs'
                },
                {
                    label: 'gatsby'
                },
                {
                    label: 'react-static'
                }
            ]
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
                    label: 'distributed'
                },
                {
                    label: 'traefik'
                }
            ]
        },
        {
            label: 'nodejs',
            image: require('url:/assets/skills/nodejs.png'),
            description: 'server-side javascript'
        },
        {
            label: 'vue',
            image: require('url:/assets/skills/vue.svg'),
            description: 'front-end JavaScript framework'
        },
        {
            label: 'angular',
            image: require('url:/assets/skills/angular.png'),
            description: 'front-end JavaScript framework'
        },
        {
            label: 'styled-components',
            image: require('url:/assets/skills/styled-components.png'),
            description: 'react css styling in js'
        },
    ],
    languages: [
        {
            label: 'javascript',
            image: require('url:/assets/skills/javascript.png')
        },
        {
            label: 'typescript',
            image: require('url:/assets/skills/typescript.svg')
        },
        {
            label: 'java',
            image: require('url:/assets/skills/java.svg')
        },
        {
            label: 'python',
            image: require('url:/assets/skills/python.png')
        },
        {
            label: 'bash',
            image: require('url:/assets/skills/bash.svg')
        },
        {
            label: 'sass/scss',
            image: require('url:/assets/skills/sass.svg')
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
            image: require('url:/assets/skills/parcel.ico')
        },
        {
            label: 'ansible',
            image: require('url:/assets/skills/ansible.png')
        },
        {
            label: 'terraform',
            image: require('url:/assets/skills/terraform.svg')
        },
        {
            label: 'git',
            image: require('url:/assets/skills/git.svg')
        },
        {
            label: 'npm',
            image: require('url:/assets/skills/npm.svg')
        },
        {
            label: 'yarn',
            image: require('url:/assets/skills/yarn.svg')
        },
    ],
    database: [
        {
            label: 'scylla',
            image: require('url:/assets/skills/scylla.svg')
        },
        {
            label: 'cassandra',
            image: require('url:/assets/skills/cassandra.svg')
        },
        {
            label: 'redis',
            image: require('url:/assets/skills/redis.svg')
        },
        {
            label: 'mongodb',
            image: require('url:/assets/skills/mongo.svg')
        },
        {
            label: 'postgresql',
            image: require('url:/assets/skills/postgresql.svg')
        }
    ],
    orgs: [
        {
            label: 'Heineken',
            image: require('url:/assets/experience/heineken-corporate.svg'),
            color: '#fff',
            start_date: '28 Nov 2021',
            url: 'https://heineken.com/'
        },
        {
            label: 'Triple',
            image: require('url:/assets/experience/triple.svg'),
            color: '#0E0940',
            start_date: '28 Nov 2021',
            url: 'https://wearetriple.com/'
        },
        {
            label: 'Passionate People',
            image: require('url:/assets/experience/pp.png'),
            color: '#171717',
            start_date: '1 Nov 2021',
            url: 'https://passionatepeople.io/'
        },
        {
            label: 'Codana',
            image: require('url:/assets/experience/codana.png'),
            color: '#8400ff',
            start_date: '1 Feb 2021',
            end_date: '31 Oct 2021',
            url: 'https://codana.eu/'
        },
        {
            label: 'EForumFactory',
            image: require('url:/assets/experience/eff2.png'),
            color: '#fff',
            start_date: '1 Jan 2018',
            end_date: '1 Feb 2021',
            url: 'https://eforumfactory.be/'
        },
    ],
    repos: [
        {
            icon: 'Book',
            label: 'Does things',
            url: '',
            description: 'A thing here'
        }
    ]
};