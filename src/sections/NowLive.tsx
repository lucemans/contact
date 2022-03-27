import { FC } from 'react';
import styled from 'styled-components';
import { Temporal } from '@js-temporal/polyfill';
import { Conferences, DateText } from '../static/conferences';

const Wrapper = styled.div<{color: string}>`
    width: 100%;
    background: ${({color}) => color};
    color: var(--theme-bg);
    padding: 1rem;
`;

const Link = styled.a`
    color: inherit;
    text-decoration: underline;
    &:hover {
        font-weight: bolder;
    }
`;

export const NowLive: FC = () => {
    const now = Temporal.Now.instant().epochSeconds;
    const eventID: DateText | null = (
        Object.keys(Conferences) as DateText[]
    ).find((conference) => {
        const [dateA, dateB] = conference.split('-');
        console.log(now, dateA, dateB);
        return (
            now > parseInt(dateA) && now < parseInt(dateB)
        );
    });
    const event = eventID ? Conferences[eventID] : null;

    if (!event)
        return <></>;

    return (
        <Wrapper color={event.color}>
            NOW LIVE AT{' '}
            <Link href={event.url} target="_blank">
                {event.urlLabel}
            </Link>{' '}
            🚀
        </Wrapper>
    );
};
