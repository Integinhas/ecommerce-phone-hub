import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logoImage from '../../components/Logo/imgLogo/logo-phone-hub.png';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './login.css';
import '../style/global.css';

//esquema de validação para o login
const loginSchema = yup.object({
  email: yup.string()
    .required('Campo obrigatório')
    .typeError('campo Obrigatório'),
  password: yup.string()
    .required('Campo obrigatório')
    .typeError('campo Obrigatório')
});

const Login = () => {
  const { 
    register, 
    handleSubmit:onSubmit, 
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginSchema) });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  //função para lidar com o envio do formulário
  const handleSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
    if(Object.keys(errors).length === 0) {
      navigate('/');
    }
  };

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
              {/* formulário */}
              <form onSubmit={onSubmit(handleSubmit)}>

                {/* campo email */}
                <TextField
                  id="email"
                  label="Email"
                  {...register('email')}
                  style={{ width: '100%', border: 'none' }}
                />
                <span className="errors">{errors?.email?.message}</span>

                <div className="form-group mt-4">
                  {/* campo senha */}
                  <TextField
                    type="password"
                    id="password"
                    label="Senha"
                    {...register('password')}
                    style={{ width: '100%', border: 'none' }}
                  />
                </div>
                <span className="errors">{errors?.password?.message}</span>

                <Stack spacing={2} justifyContent="center" alignItems="center" marginTop="8%">
                  {/* botão submit */}
                  <Button 
                    type="submit"
                    style={{ 
                      backgroundColor: '#DC7D00', 
                      color: '#fff', 
                    }}>
                    Continuar
                  </Button>
                  {/* link para criar uma conta */}
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
