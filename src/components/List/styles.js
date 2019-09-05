import styled from 'styled-components';

export const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 0px;

    ul {
        height: 300px;
        overflow: auto;
        
        li {
            padding: 15px;
            margin-bottom: 25px;
            border-radius: 8px;
            background: rgba(255,255,255, 0.4);

            h1 {
                color: #7159c1;
            }

            p {
                margin-top: 10px;
                margin-bottom: 10px;
                font-weight: 300;
            }

            span {
                font-weight: bold;
            }
        }
    }
`;
