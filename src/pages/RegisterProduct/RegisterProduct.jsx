import React, { useState } from 'react';
import logoImage from '../../components/Logo/imgLogo/logo-phone-hub.png';
import { Footer } from '../../components/Footer/Footer';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { Slide, Snackbar, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {object} from 'yup';
import * as yup from 'yup';

import '../style/global.css';

//esquema de validação para o cadastro do produto
const productRegisterSchemma = object({
  productName: yup
    .string()
    .required('campo obrigatório')
    .min(5, 'insira pelo menos 5 caracteres')
    .typeError('campo obrigatório'),
  price:yup
    .number()
    .required('campo obrigatório')
    .typeError('campo obrigatório'),
  productDescription: yup
    .string()
    .required('campo obrigatório')
    .min(5, 'insira pelo menos 5 caracteres')
    .typeError('campo obrigatório'),
  productAvailability:yup
    .boolean()
    .required('campo obrigatório')
    .typeError('campo obrigatório')
    .oneOf([true, false]),
});
const Cadastro = () => {

  const { 
    register, 
    handleSubmit:onSubmit, 
    formState: { errors }
  } = useForm({ resolver: yupResolver(productRegisterSchemma) });

  const [ selectedValue, setSelectedValue ] = useState();
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
        navigate('/');
      }, 1500);
    }
  };

  //atualiza o valor do componente disponibilidade do produto
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
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
              <h2 className="text-center">Cadastre seu Produto</h2>
            </div>
            <p className="description text-center">
              <span>Insira os dados do produto</span>
            </p>
            <div className="card-body">
              {/* formulário */}
              <form onSubmit={onSubmit(handleSubmit)}>
                {/* campo nome do prduto */}
                <TextField
                  type="text"
                  id="product_name"
                  label="Nome do produto"
                  {...register('productName')}
                  style={{ width: '100%', border: 'none' }}
                />
                <span className="errors">{errors?.productName?.message}</span>

                {/* campo preço */}
                <TextField
                  type="number"
                  id="price"
                  label="Preço"
                  {...register('price')}
                  style={{ width: '100%', border: 'none', marginTop: '3%' }}
                />
                <span className="errors">{errors?.price?.message}</span>
                
                {/* campo descrição do produto */}
                <div className="form-group mt-4">
                  <TextField
                    label="Descrição do produto"
                    multiline
                    maxRows={3}
                    {...register('productDescription')}
                    style={{width:'100%'}}
                  />
                  <span className="errors">{errors?.productDescription?.message}</span>

                  {/* campo selecionar disponibilidade do produto */}
                  <FormControl fullWidth style={{marginTop:'3%'}}>
                    <InputLabel id="product_vailability_label">Disponível p/ venda</InputLabel>
                    <Select
                      labelId="product_vailability_label"
                      id="product_vailability"
                      label="Disponível p/ venda"
                      value={selectedValue}
                      onChange={handleChange}
                      {...register('productAvailability')}
                    >
                      <MenuItem value={true}>Sim</MenuItem>
                      <MenuItem value={false}>Não</MenuItem>
                    </Select>
                  </FormControl>
                  <span className="errors">{errors?.productAvailability?.message}</span>
                </div>

                <Stack spacing={2} justifyContent="center" alignItems="center" marginTop="5%">
                  {/* botão submit */}
                  <Button 
                    type="submit"
                    style={{ 
                      backgroundColor: '#DC7D00', 
                      color: '#fff'}}>
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
            marginTop:'8%'}}>
            Protegido por reCAPTCHA- <span style={{ color: '#DC7D00' }}>Privacidade - Condições</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cadastro;

