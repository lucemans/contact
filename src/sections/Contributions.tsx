import { format } from 'date-fns';
import { FC, useEffect, useState } from 'react';
import { RefreshCw } from 'react-feather';
import styled from 'styled-components';

import { Table } from '../components/Table';

const DWrapper = styled.div``;

const Wrapper = styled.div`
    position: relative;
`;

const ContributionsSquare = styled.svg`
    width: 100%;
`;

const TooltipInner = styled.div`
    display: flex;
    align-items: stretch;
    white-space: nowrap;
`;

const MiniSquare = styled.div`
    width: 0.2rem;
    margin-right: 0.4rem;
`;

const DateText = styled.div`
    color: var(--theme-text-alt);
`;

const Tooltip = styled.div`
    color: white;
    background: var(--theme-bg);
    padding: 0.5rem;
    border: 1px solid white;
    border-radius: 0.25rem;
    position: absolute;

    transform: translate(-50%, -100%);
    z-index: 2;

    &::after {
        content: '';
        width: 2rem;
        height: 0.6rem;
        position: absolute;
        left: 50%;
        bottom: calc(-0.6rem - 1px);
        transform: translateX(-50%);
        background: white;
        z-index: -4;

        clip-path: polygon(100% 0, 0 0, 50% 100%);
    }
`;

const Source = styled.a`
    float: right;
    color: var(--theme-text-alt);
    text-decoration: none;
    font-size: 0.8em;
    &:hover {
        text-decoration: underline;
        color: var(--theme-text-main);
    }
`;

const Reload = styled.button`
    width: fit-content;
    height: 1rem;
    margin: 0;
    font-size: 1rem;
    cursor: pointer;
    background: transparent;
    border: none;
    color: var(--theme-text-alt);
    display: flex;
    gap: 0.5em;

    > svg {
        transition: 250ms;
        width: 1rem;
        height: 1rem;
        font-size: 1rem;
    }
    span {
        width: fit-content;
        opacity: 0;
        display: none;
    }
    &:hover {
        > svg {
            transform: rotate(45deg);
        }
        > * {
            color: var(--color-green);
        }
        > span {
            opacity: 1;
            display: block;
        }
    }
    &:active {
        > svg {
            transform: rotate(325deg);
        }
    }
`;

const BottomBar = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    /* margin-bottom: -1em; */
`;

const DaySquare = styled.rect`
    border-radius: 0.1rem;
    position: relative;
`;

type WaterLevel =
    | 'NONE'
    | 'FIRST_QUARTILE'
    | 'SECOND_QUARTILE'
    | 'THIRD_QUARTILE'
    | 'FOURTH_QUARTILE';

type Day = {
    color: string;
    contributionCount: number;
    contributionLevel: WaterLevel;
    date: string;
    weekday: number;
};

type Week = {
    contributionDays: Day[];
};

type Contribution = {
    colors: [string, string, string, string];
    totalContributions: number;
    weeks: Week[];
    firstDay: string;
};

const brightnessBase = 0.2;
const brightnessLevels: Record<WaterLevel, number> = {
    NONE: brightnessBase + 0,
    FIRST_QUARTILE: brightnessBase + 0.3,
    SECOND_QUARTILE: brightnessBase + 0.6,
    THIRD_QUARTILE: brightnessBase + 0.8,
    FOURTH_QUARTILE: brightnessBase + 1,
};

const themeColors = ['pink', 'blue', 'red', 'yellow', 'green'];
const randomThemeColor = () => {
    return themeColors.at(Math.floor(Math.random() * themeColors.length));
};

export const Contributions: FC = () => {
    const [contributions, setContributions] = useState<Contribution | null>();
    const [contriHover, setContriHover] = useState<
        | {
              dayIndex: number;
              weekIndex: number;
          }
        | 0
    >();
    const [themeColor, setThemeColor] = useState<string>(randomThemeColor());

    const transformWaterLevel = (water: WaterLevel) => {
        return {
            fill: `var(--color-${themeColor})`,
            background: `var(--color-${themeColor})`,
            filter: `brightness(${brightnessLevels[water]})`,
        };
    };

    useEffect(() => {
        (async () => {
            const a = await fetch('https://ghchart.lvk.sh', {});

            setContributions(await a.json());
        })();
    }, [0]);

    if (!contributions)
        return (
            <Table header={'Total Contributions in last 365 days'}>
                Loading...
            </Table>
        );

    const svgWidth = contributions.weeks.length * 12 - 2;
    const svgHeight =
        contributions.weeks.at(0).contributionDays.length * 12 - 3;
    const hoverData = contriHover
        ? contributions.weeks[contriHover.weekIndex].contributionDays[
              contriHover.dayIndex
          ]
        : undefined;

    return (
        <Table
            header={'Total Contributions in last 365 days'}
            sideHeader={contributions.totalContributions}
        >
            <DWrapper>
                <Wrapper
                    onMouseLeave={() => {
                        setContriHover(undefined);
                    }}
                >
                    <ContributionsSquare
                        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    >
                        {contributions.weeks.map((week, weekIndex) => (
                            <g
                                x={weekIndex * 12}
                                transform={`translate(${weekIndex * 12}, 0)`}
                            >
                                {week.contributionDays.map((day, dayIndex) => (
                                    <DaySquare
                                        width={10}
                                        height={10}
                                        y={dayIndex * 12}
                                        style={transformWaterLevel(
                                            day.contributionLevel
                                        )}
                                        onMouseEnter={() => {
                                            setContriHover({
                                                dayIndex,
                                                weekIndex,
                                            });
                                        }}
                                    />
                                ))}
                            </g>
                        ))}
                    </ContributionsSquare>
                    {contriHover && (
                        <Tooltip
                            style={{
                                left:
                                    ((contriHover.weekIndex * 12 + 6) /
                                        svgWidth) *
                                        100 +
                                    '%',
                                top:
                                    ((contriHover.dayIndex * 12 - 6) /
                                        svgHeight) *
                                        100 +
                                    '%',
                            }}
                        >
                            <TooltipInner>
                                <MiniSquare
                                    style={transformWaterLevel(
                                        hoverData.contributionLevel
                                    )}
                                />
                                <div>
                                    <div>
                                        {hoverData.contributionCount}{' '}
                                        Contributions
                                    </div>
                                    <DateText>
                                        {format(
                                            new Date(hoverData.date),
                                            'LLL d, u'
                                        )}
                                    </DateText>
                                </div>
                            </TooltipInner>
                        </Tooltip>
                    )}
                </Wrapper>
                <BottomBar>
                    <Reload
                        onClick={() => {
                            setThemeColor(randomThemeColor());
                        }}
                        aria-label="Randomize Colors"
                    >
                        <RefreshCw />
                        <span>Randomize Colors</span>
                    </Reload>
                    <Source
                        href="https://github.com/lvkdotsh/ghchart"
                        target="_blank"
                    >
                        Source
                    </Source>
                </BottomBar>
            </DWrapper>
        </Table>
    );
};
