import React, { useState } from 'react';
import { toast } from 'react-toastify'

import List from '../List';

import {
    Container,
    Grid,
    InputLabel,
    Select,
    MenuItem,
    FilledInput

} from '@material-ui/core';

import { Wrapper, FormCars, Text, SelectControl, ControlLabel, Check, Button } from './styles';

import logo from '../../assets/vehicle.svg';

export default function Form() {
    const [ client, setClient ] = useState('');
    const [ vehicle, setVehicle ] = useState('');
    const [ mark, setMark ] = useState('');
    const [ renew, setRenew ] = useState(false);
    const [ fipe, setFipe ] = useState('');
    

    function handleClientChange(e) {
        setClient(e.target.value);
    }
    function handleVehicleChange(e) {
        setVehicle(e.target.value);
    }
    function handleMarkChange(e) {
        setMark(e.target.value);
    }
    function handleRenewChange(e) {
        setRenew(e.target.value);
    }
    function handleFipeChange(e) {
        setFipe(e.target.value);
    }

    function handleClear() {
        setClient('');
        setVehicle('');
        setMark('');
        setRenew(false);
        setFipe('');
        
        toast.success("Compos limpos!");
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(!client && !vehicle && !mark && !fipe) {
            toast.warn('Preencha todos os campos');
        } else if(!client) {
            toast.warn('Preencha o nome do cliente');
        } else if(!vehicle) {
            toast.warn('Informe o modelo do veiculo');
        } else if(!mark) { 
            toast.warn('selecione a marca do veiculo'); 
        } else if (!fipe) {
            toast.warn('preencha o valor da tabela FIPE');
        }

        
    }

    return (
        <Container>
            <Wrapper>
                <FormCars onSubmit={handleSubmit}>
                    <img src={logo} alt=""/>
                    <Text value={client} onChange={handleClientChange} variant="filled" label="Cliente / Contato"/>
                    <Text value={vehicle} onChange={handleVehicleChange} variant="filled" label="Modelo do Veículo"/>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <SelectControl variant="filled">
                                <InputLabel htmlFor="filled-age-simple">Marca</InputLabel>
                                <Select
                                    
                                    input={<FilledInput name="age" id="filled-age-simple" />}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </SelectControl>
                        </Grid>
                        <Grid item xs={6}>
                            <ControlLabel control={<Check value="checkedC" />} label="Renovação" />
                        </Grid>
                    </Grid>
                    <Text value={fipe} onChange={handleFipeChange} variant="filled" label="R$ Avaliação Tabela Fipe"/>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Button type="button" color="#d0d615">Calcular</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button type="button" onClick={handleClear} color="#15d696">Novo</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button type="button"  color="#7159c1">Listar</Button>
                        </Grid>
                    </Grid>
                    <h2>Valor estimado do seguro: R$1.080.00</h2>
                    <Button type="submit" color="#7159c1">Registrar Interesse</Button>
                </FormCars>
                
                <List />
            </Wrapper>
        </Container>
        
    );
}