import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon(){
  return(
    <div className="logon-container">

      <section className="form">

        <img src={logo} alt="Be the Hero"/>
        
        <form action="">

          <h1> Faça seu logon</h1>

          {/* Placeholder and button to login */}

          <input placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>

          {/* Link para cadastrar */}
        
          <Link className="back-link"to="/Register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>

        </form>

      </section>

      <img src={heroes} alt="Heroes"/>
    </div>
  );
}