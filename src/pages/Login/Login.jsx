import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logoImage from '../../components/Logo/imgLogo/logo-phone-hub.png';

import './login.css';
import '../style/global.css';
import { Footer } from '../../components/Footer/Footer';

const Login = () => {
  return (
    <div className="app">
      <header className="header" style={{padding:'3%'}}>
        <Link to="/">
          <img src={logoImage} alt="logo-phone-hub" className="styleLogo"/>
        </Link>
      </header>

      <div className="card-content">
        <div className="style-text">
          <div className="card-login">
            <div className="card-header" style={{marginTop:'10%'}}>
              <h2 className="text-center">Login</h2>
              <p className="description text-center">
                <span>Por favor digite  sua identificação para login!</span>
              </p>
            </div>
            <div className="card-body">
              <form>
                <TextField
                  id="email"
                  label="Email"
                  required
                  style={{ width: '100%', border: 'none' }}
                />

                <div className="form-group mt-4">
                  <TextField
                    type="password"
                    id="password"
                    label="Senha"
                    required
                    style={{ width: '100%', border: 'none' }}
                  />
                </div>

                <Stack spacing={2} justifyContent="center" alignItems="center" marginTop="8%">
                  <Link to="/">
                    <Button style={{ 
                      backgroundColor: '#DC7D00', 
                      color: '#fff', 
                    }}>
                    Continuar
                    </Button>
                  </Link>

                  <Link to="/cadastro" style={{textDecoration:'none'}}>
                    <span className="goToResgistration">Criar conta</span>
                  </Link>             
                </Stack>
              </form>
            </div>
          </div>
          <p style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: '8%'}}>
              Protegido por reCAPTCHA  - 
            <span style={{ color: '#DC7D00' }}>
                Privacidade - Condições
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
