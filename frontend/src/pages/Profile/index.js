import React from 'react';

import Logo from '../../assets/logo.svg';

import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

import './styles.css';

export default function Profile() {
  return(
    <div className="profile-container">
      <header>
        <img src={Logo} alt="Be the Hero"/>
        <span> Bem vinda, APAE </span>
        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

        <button type="button">
        <FiPower size={18} color="#E02041"></FiPower>
        </button>
      </header>

      <h1> Casos Cadastrados </h1>

      <ul>

        <li>
          <strong>CASO:</strong>
          <p> Caso test</p>

          <strong>DESCRIÇÃO:</strong>
          <p> Descrição de teste</p>

          <strong> VALOR: </strong>
          <p> R$ 120,00 </p>
          <button type="button">
          <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p> Caso test</p>

          <strong>DESCRIÇÃO:</strong>
          <p> Descrição de teste</p>

          <strong> VALOR: </strong>
          <p> R$ 120,00 </p>
          <button type="button">
          <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p> Caso test</p>

          <strong>DESCRIÇÃO:</strong>
          <p> Descrição de teste</p>

          <strong> VALOR: </strong>
          <p> R$ 120,00 </p>
          <button type="button">
          <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p> Caso test</p>

          <strong>DESCRIÇÃO:</strong>
          <p> Descrição de teste</p>

          <strong> VALOR: </strong>
          <p> R$ 120,00 </p>
          <button type="button">
          <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p> Caso test</p>

          <strong>DESCRIÇÃO:</strong>
          <p> Descrição de teste</p>

          <strong> VALOR: </strong>
          <p> R$ 120,00 </p>
          <button type="button">
          <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

      </ul>

    </div>
  );
}