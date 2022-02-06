import styled from 'styled-components';

export const VerticalList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > * {
        flex: 1;
    }
`;

export const HorizontalList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    width: 100%;
    gap: 1rem;
    break-inside: avoid;
    > * {
        flex: 1;
    }
    @media screen and (max-width: 765px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
`;
