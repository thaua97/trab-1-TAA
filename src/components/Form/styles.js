import styled from 'styled-components';
import { lighten } from 'polished';

import { TextField, FormControl, FormControlLabel, Checkbox } from '@material-ui/core';

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 300px;

    @media screen and (max-width: 540px) {
        padding: 0 10px;
    }

    h2 {
        padding: 35px 0;
        text-align: center;
        color: rgba(0,0,0,0.4);

        @media screen and (max-width: 540px) {
            font-size: 14px;
        }
    }
`;

export const FormCars = styled.form`
    height: 100%;
    margin-top: 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 200px;
        margin: 20px 0px 40px;
    
        @media screen and (max-width: 540px) {
            width: 160px;
            margin-top: 20px;
            margin-bottom: 60px;
        }
    }
`;

export const Text = styled(TextField)`
    width: 100%;
    margin-bottom: 20px !important;
    background: #fff;
    border-radius: 4px;
    
    label {
        color: #7159c1;
    }
`;

export const SelectControl = styled(FormControl)`
    width: 100%;
    margin-bottom: 20px !important;
    background: #fff;
    border-radius: 4px;

    label {
        color: #7159c1;
    }

`;

export const ControlLabel = styled(FormControlLabel)`
    margin-top: 10px !important;
    color: #fff;
`;

export const Check = styled(Checkbox)`
    color: #7159c1 !important;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 2px;
    padding: 12px;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    background-color: ${props => props.color};
    box-shadow: 0 0 4px #999;
    outline: none;
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: ${ props => lighten(0.1, props.color)} radial-gradient(circle, transparent 1%, ${ props => lighten(0.1, props.color)} 1%) center / 15000%;
    }
    
    &:active {
        background-color: ${props => lighten(0.1, props.color)} ;
        background-size: 100%;
        transition: background 0s;
    }
`;