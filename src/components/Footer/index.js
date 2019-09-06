import React from 'react';

import { GoMarkGithub, GoRepo } from 'react-icons/go';
import { FiInstagram } from 'react-icons/fi';

import { Container } from './styles';

export default function Footer() {
    return (
        <Container>
            <footer>
                <div>
                    todos os direitos reservados
                </div>
                <ul>
                    <li>
                        <a href="">
                           <GoMarkGithub size={26} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <GoRepo size={26} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FiInstagram size={26}/>
                        </a>
                    </li>
                </ul>
            </footer>
        </Container>
    );
}
