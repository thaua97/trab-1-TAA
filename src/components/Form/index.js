import React from 'react';

import {
    Grid,
    InputLabel,
    Select,
    MenuItem,
    FilledInput

} from '@material-ui/core';

import { Wrapper, FormCars, Text, SelectControl, ControlLabel, Check, Button } from './styles';

import vehicle from '../../assets/vehicle.svg';

export default function Form() {
    return (
        <Wrapper>
            <FormCars>
                <img src={vehicle} alt=""/>
                <Text variant="filled" label="Cliente / Contato"/>
                <Text variant="filled" label="Modelo do Veículo"/>
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
                <Text variant="filled" label="R$ Avaliação Tabela Fipe"/>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Button color="#d0d615">Calcular</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button color="#15d696">Novo</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button color="#7159c1">Listar</Button>
                    </Grid>
                </Grid>
            </FormCars>
        </Wrapper>
        
    );
}