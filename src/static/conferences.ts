export type DateText = `${number}-${number}`;

type Conference = {
    name: string;
    color: string;
    url: string;
    urlLabel: string;
}

export const Conferences: Record<DateText, Conference> = {
    '1648377235-1648377625': {
        name: 'Test Event',
        color: '#FEFEFE',
        url: 'https://luc.computer',
        urlLabel: 'luc.computer'
    },
    '1648764000-1648850340': {
        name: 'React Live',
        color: '#61DBFB',
        url: 'https://reactlive.nl/?ref=luc.contact',
        urlLabel: 'reactlive.nl'
    }
};