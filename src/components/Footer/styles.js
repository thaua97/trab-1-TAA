import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 40px;
    bottom: 0;

    footer {
        bottom: 0;
        padding: 40px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        display: flex;

        li {
            margin: 0 5px;
        }
    }
`;
