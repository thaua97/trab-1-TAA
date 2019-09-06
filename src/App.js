import React from 'react';
import { ToastContainer } from 'react-toastify'

import Home from './pages/Home';

import GlobalStyles from './styles/global';

export default function src() {
    return (
        <div>
            <Home />
            <GlobalStyles />
            <ToastContainer autoClose={3000}/>
        </div>
    );
}
