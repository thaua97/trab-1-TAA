import React, { useState } from 'react';
import { toast } from 'react-toastify'

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
    const [ item, setItem ] = useState('')
    

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

    async function handleToList() {
        try {
            const res = await JSON.parse(localStorage.getItem('@spacecar/item'));
            if (!res){
                toast.warn('Nenhum registro no sistema!')
            } else {
                setItem(res)
                toast.success('Listado com sucesso!')
            }
            
        } catch (err) {
            toast.error('Erro ao Carregar informações!')
        }
    }

    async function handleSubmit(e) {
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
        } else {
            try {
                let data = []
                
                if(localStorage.getItem('@spacecar/item')) {
                    data = JSON.parse(localStorage.getItem('@spacecar/item'));
                }

                data.push(  
                    {
                        client,
                        vehicle,
                        mark,
                        renew,
                        fipe
                    }
                );
                
                localStorage.setItem('@spacecar/item', JSON.stringify(data));
    
                toast.success("Proposta Cadastrada!");
            } catch (err) {
                toast.error("Erro ao cadastrar proposta.");
            }
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
                                    value={mark}
                                    onChange={handleMarkChange}
                                    input={<FilledInput name="age" id="filled-age-simple" />}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Ford">Ford</MenuItem>
                                <MenuItem value="Renaut">Renaut</MenuItem>
                                <MenuItem value="Fiat">Fiat</MenuItem>
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
                            <Button type="button" onClick={handleToList} color="#7159c1">Listar</Button>
                        </Grid>
                    </Grid>
                    <h2>Valor estimado do seguro: R$1.080.00</h2>
                    <Button type="submit" color="#7159c1">Registrar Interesse</Button>
                </FormCars>
                {item !== '' ? 
                    <ul>
                        {
                            item && item.map(i => (
                                <li key={i.client}>
                                    <h1>{i.client}</h1>
                                    <p>{i.vehicle}</p>
                                    <span>{i.fipe}</span>
                                </li>
                            ))
                        }
                    </ul>
                    :
                     <>
                        <em></em>
                        <em></em>
                     </>
                }                
            </Wrapper>
        </Container>
        
    );
}