import styled from 'styled-components';

export const Container = styled.header`
    width: auto;
    height: 70px;
    padding: 15px 90px;
    background: #fff;
    box-shadow: 0 2px 4px 0px rgba(0,0,0,0.3);
    font-weight: 300;
    color: #7159c1;
   
    @media screen and (max-width: 540px) {
        padding: 15px 40px;
        width: 100%
    }
`