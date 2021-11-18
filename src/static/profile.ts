import { Organization } from "types/organization.type";
import { Repository } from "types/repository.type";
import { Skill } from "types/skill.type";

export const Profile: {
    skills: Skill[],
    orgs: Organization[],
    repos: Repository[]
} = {
    skills: [
        {
            label: 'react',
            image: require('url:/assets/skills/react.png')
        },
        {
            label: 'deno',
            image: require('url:/assets/skills/deno.png')
        }
    ],
    orgs: [
        {
            label: 'EForumFactory',
            image: require('url:/assets/experience/eff.png'),
            color: '#006381',
            start_date: '1 Jan 2018',
            end_date: '1 Feb 2021',
            url: 'https://eforumfactory.be/'
        },
        {
            label: 'Codana',
            image: require('url:/assets/experience/codana.jpeg'),
            color: '#8400ff',
            start_date: '1 Feb 2021',
            end_date: '31 Oct 2021',
            url: 'https://codana.eu/'
        },
        {
            label: 'Passionate People',
            image: require('url:/assets/experience/pp.png'),
            color: '#ff0000',
            start_date: '1 Nov 2021',
            url: 'https://passionatepeople.io/'
        }
    ],
    repos: []
};