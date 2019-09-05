import React from 'react';
import { ToastContainer } from 'react-toastify'


import Header from './components/Header';
import Form from './components/Form';
import GlobalStyles from './styles/global';

export default function src() {
    return (
        <div>
            <Header />
            <Form />
            <GlobalStyles />
            <ToastContainer autoClose={3000}/>
        </div>
    );
}
