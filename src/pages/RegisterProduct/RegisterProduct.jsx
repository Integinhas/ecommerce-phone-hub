import React, { useState } from 'react';
import logoImage from '../../components/Logo/imgLogo/logo-phone-hub.png';
import { Footer } from '../../components/Footer/Footer';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import '../style/global.css';
import { FormControl, InputLabel } from '@mui/material';

const Cadastro = () => {

  const [ selectedValue, setSelectedValue ] = useState('');

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
              <form>
                <TextField
                  type="text"
                  id="productName"
                  label="Nome do produto"
                  name="productName"
                  required
                  style={{ width: '100%', border: 'none' }}
                />

                <TextField
                  type="number"
                  id="price"
                  label="Preço"
                  name="price"
                  required
                  style={{ width: '100%', border: 'none', marginTop: '3%' }}
                />
                <div className="form-group mt-4">

                  <TextField
                    label="Descrição do produto"
                    multiline
                    maxRows={3}
                    style={{width:'100%'}}
                  />

                  <FormControl fullWidth style={{marginTop:'3%'}}>
                    <InputLabel id="demo-simple-select-label">Disponível p/ venda</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Disponível p/ venda"
                      value={selectedValue}
                      onChange={handleChange}
                    >
                      <MenuItem value={'Sim'}>Sim</MenuItem>
                      <MenuItem value={'Não'}>Não</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <Stack spacing={2} justifyContent="center" alignItems="center" marginTop="5%">
                  <Link to="/">
                    <Button style={{ 
                      backgroundColor: '#DC7D00', 
                      color: '#fff'}}>
                        Continuar
                    </Button>
                  </Link>
                </Stack>

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

