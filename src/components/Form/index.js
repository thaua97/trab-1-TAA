import React, { useState } from 'react';
import { toast } from 'react-toastify'

import { formatPrice } from '../../util/format';

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
    const [ safe, setSafe ] = useState(0);
    const [ item, setItem ] = useState('');
    

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
        setRenew(e.target.checked);
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
        setSafe(0);

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

    function handleCalculc() {
        setSafe(0)
        if(!mark){
            toast.warn("Selecione a marca do veiculo");
        } else if (renew === true && (mark === 'Fiat' || mark === 'Chevrolet')) {
            const safeValue = 97 / 100;
            const total = fipe - (fipe * safeValue);
            const discountTen = 10 / 100;
            const totalDiscount = total - (total * discountTen);
            setSafe(totalDiscount);
        }  else if(renew === false && (mark === 'Fiat' || mark === 'Chevrolet')) {
            const safeValue = 97 / 100;
            const total = fipe - (fipe * safeValue);
            setSafe(total);
        }   else if (renew === true && (mark !== 'Fiat' || mark !== 'Chevrolet')) {
            const safeValue = 96 / 100;
            const total = fipe - (fipe * safeValue);
            const discountTen = 10 / 100;
            const totalDiscount = total - (total * discountTen);
            setSafe(totalDiscount);
        } else if (renew === false && (mark !== 'Fiat' || mark !== 'Chevrolet')) {
            const safeValue = 96 / 100;
            const total = fipe - (fipe * safeValue);
            setSafe(total);
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
                    data = await JSON.parse(localStorage.getItem('@spacecar/item'));
                }

                data.push(  
                    {
                        client,
                        vehicle,
                        mark,
                        renew,
                        fipe,
                        safe
                    }
                );
                
                localStorage.setItem('@spacecar/item', JSON.stringify(data))
                
                toast.success("Proposta Cadastrada!");

                await JSON.parse(localStorage.getItem('@spacecar/item'));
                
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
                                <MenuItem value="Chevrolet">Chevrolet</MenuItem>
                                <MenuItem value="Renaut">Renaut</MenuItem>
                                <MenuItem value="Fiat">Fiat</MenuItem>
                                <MenuItem value="Volkswagen">Volkswagen</MenuItem>
                                </Select>
                            </SelectControl>
                        </Grid>
                        <Grid item xs={6}>
                            <ControlLabel control={<Check type="checkbox" onChange={handleRenewChange} value={renew} />} label="Renovação" />
                        </Grid>
                    </Grid>
                    <Text value={fipe} onChange={handleFipeChange} type="number" variant="filled" label="R$ Avaliação Tabela Fipe"/>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Button type="button" onClick={handleCalculc} color="#d0d615">Calcular</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button type="button" onClick={handleClear} color="#15d696">Novo</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button type="button" onClick={handleToList} color="#7159c1">Listar</Button>
                        </Grid>
                    </Grid>
                    {
                        safe !== 0 ?
                        <>
                            <h2>Valor estimado do seguro: {formatPrice(safe)}</h2>
                            <Button type="submit" color="#7159c1">Registrar Interesse</Button> 
                        </>
                        :
                    null
                    }
                </FormCars>
                {item !== '' ? 
                    <ul>
                        {
                            item && item.map(i => (
                                <li key={i.client}>
                                    <div>
                                        <span>Nome do cliente</span>
                                        <p>{i.client}</p>
                                    </div>
                                    <div>
                                        <span>Veiculo</span>
                                        <p>{`${i.mark} - ${i.vehicle}`}</p>
                                    </div>
                                    <div>
                                        <span>Valor do seguro</span>
                                        <p>{formatPrice(i.safe)}</p>
                                    </div>
                                    <div>
                                        <span>Valor do veiculo</span>
                                        <p>{formatPrice(i.fipe)}</p>
                                    </div>
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