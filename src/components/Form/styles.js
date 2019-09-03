import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const FormControll = styled.form`
    width: auto;
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 314px), (max-width: 540px) {
        padding: 15px 35px;
    }
`;

export const Text = styled(TextField)`
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px !important;
    background: #fff;
    border-radius: 4px;
    
    label {
        padding: 0px 10px !important;
        margin-bottom: 40px !important;
        color: #915dc9; 
    }

    @media screen and (min-width: 314px), (max-width: 540px) {
        width: 100%;
    }
`;