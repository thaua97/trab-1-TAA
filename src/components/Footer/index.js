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
                        <a href="https://github.com/thaua97?tab=repositories" rel="noopener noreferrer" target="_blank">
                           <GoMarkGithub size={26} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/thaua97/trab-1-TAA" rel="noopener noreferrer" target="_blank">
                            <GoRepo size={26} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/thaua97/" rel="noopener noreferrer" target="_blank">
                            <FiInstagram size={26}/>
                        </a>
                    </li>
                </ul>
            </footer>
        </Container>
    );
}
