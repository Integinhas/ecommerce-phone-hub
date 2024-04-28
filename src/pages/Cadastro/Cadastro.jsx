import React, {} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logoImage from '../../components/Logo/imgLogo/logo-phone-hub.png';
import { Slide, Snackbar, Stack } from '@mui/material';
import { Footer } from '../../components/Footer/Footer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './cadastro.css';

//esquema de validação para o cadastro
const loginSchema = yup.object({
  email: yup.string()
    .required('Campo obrigatório')
    .min(3, 'insira pelo menos 3 caracteres')
    .typeError('Campo obrigatório'),
  confirmEmail: yup.string()
    .required('Campo obrigatório')
    .typeError('Campo obrigatório')
    .test(
      'emails-match', 'emails não coincidem',
      function(value){
        if(!value) return false;

        return this.parent.email === value;
      }
    ),
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
  const [alertSucessMessage, setAlertSucessMessage] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);

  //função para lidar com o envio do formulário
  const handleSubmit = () => {
    setSubmitted(true);
    if (Object.keys(errors).length === 0) {
      setAlertSucessMessage('Cadastro realizado com sucesso');
      setOpenAlert(true);
      setTimeout(() => {
        navigate('/login');
      }, 1500);
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
              {/* formulário */}
              <form onSubmit={onSubmit(handleSubmit)}>
                {/* campo email */}
                <TextField
                  style={{ width: '100%', border: 'none' }}
                  id="email"
                  label="Email"
                  {...register('email')}
                />
                <span className="errors">{errors?.email?.message}</span>

                {/* campo de confirmação do email */}
                <TextField
                  style={{ width: '100%', border: 'none', marginTop: '3%' }}
                  id="confirmEmail"
                  label="Confirme seu email"
                  {...register('confirmEmail')}
                />
                <span className="errors">{errors?.confirmEmail?.message}</span>

                <div className="form-group mt-4">
                  {/* campo senha */}
                  <TextField
                    style={{ width: '100%', border: 'none' }}
                    type="password"
                    id="password"
                    label="Senha"
                    {...register('password')}
                  />
                  <span className="errors">{errors?.password?.message}</span>

                  {/* campo de confirmação da senha */}
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
                  {/* botão submit */}
                  <Button type="submit" style={{backgroundColor:'#FFA500', color:'#fff'}}>
                        Continuar
                  </Button>
                  {/* link para retornar ao home */}
                  <Link to="/" style={{textDecoration:'none'}}>
                    <span className="returnToMenu">Voltar para o menu</span>
                  </Link>
                </Stack>

                {/* mensagem de alert */}
                {alertSucessMessage && (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Snackbar
                      open={openAlert}
                      autoHideDuration={1000}
                      onClose={() => {setOpenAlert(false);}}
                      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                      TransitionComponent={Slide}
                      TransitionProps={{ direction: 'left' }}
                    >
                      <Alert variant="filled" severity="success">
                        {alertSucessMessage}
                      </Alert>
                    </Snackbar>
                  </Stack>
                )}
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
