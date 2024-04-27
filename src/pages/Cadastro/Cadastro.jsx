import React, {} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logoImage from '../../components/Logo/imgLogo/logo-phone-hub.png';
import { Stack } from '@mui/material';
import { Footer } from '../../components/Footer/Footer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {object} from 'yup';
import * as yup from 'yup';

import './cadastro.css';

const loginSchema = object({
  email: yup.string()
    .required('Campo obrigatório')
    .min(3, 'insira pelo menos 3 caracteres')
    .typeError('Campo obrigatório'),
  confirmEmail: yup.string()
    .required('Campo obrigatório')
    .typeError('Campo obrigatório'),
  password: yup.string()
    .required('Campo obrigatório')
    .min(8, 'insira pelo menos 8 caracteres')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'A senha deve conter letras e números')
    .typeError('Campo obrigatório'),
  confirmPassword: yup.string()
    .required('Campo obrigatório')
    .typeError('Campo obrigatório')
    .test(
      'passwords-match', 'senhas não coincidem',
      function(value) {
        if(!value) return false;

        return this.parent.password === value;
      }
    )
});

const Cadastro = () => {
  const { 
    register, 
    handleSubmit:onSubmit, 
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginSchema) });

  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
    if (Object.keys(errors).length === 0) {
      navigate('/login');
    }
  };

  return (
    <div className="app">
      <header className="header" style={{padding:'3%'}}>
        <img src={logoImage} alt="logo-phone-hub" className="styleLogo"/>
      </header>

      <div className="card-content">
        <div className="style-text">
          <div className="card-login">
            <div className="card-header">
              <h2 className="text-center">Registre-se</h2>
              <p className="description text-center">
                <span>Por favor digite  sua identificação para cadastro!</span>
              </p>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit(handleFormSubmit)}>
                <TextField
                  style={{ width: '100%', border: 'none' }}
                  id="email"
                  label="Email"
                  {...register('email')}
                />
                <span className="errors">{errors?.email?.message}</span>

                <TextField
                  style={{ width: '100%', border: 'none', marginTop: '3%' }}
                  id="confirmEmail"
                  label="Confirme seu email"
                  {...register('confirmEmail')}
                />
                <span className="errors">{errors?.confirmEmail?.message}</span>

                <div className="form-group mt-4">
                  <TextField
                    style={{ width: '100%', border: 'none' }}
                    type="password"
                    id="password"
                    label="Senha"
                    {...register('password')}
                  />
                  <span className="errors">{errors?.password?.message}</span>

                  <TextField
                    style={{ width: '100%', border: 'none', marginTop: '3%' }}
                    type="password"
                    id="confirmPassword"
                    label="Confirme sua senha"
                    {...register('confirmPassword')}
                  />
                </div>
                <span className="errors">{errors?.confirmPassword?.message}</span>

                <Stack spacing={2} justifyContent="center" alignItems="center" marginTop="3%">
                  <Button type="submit" style={{backgroundColor:'#FFA500', color:'#fff'}}>
                        Continuar
                  </Button>
                  <Link to="/" style={{textDecoration:'none'}}>
                    <span className="returnToMenu">Voltar para o menu</span>
                  </Link>
                </Stack>
              </form>
            </div>
          </div>

          <p style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: '8%' }}>
            Protegido por reCAPTCHA- <span style={{ color: '#DC7D00' }}>Privacidade - Condições</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cadastro;
