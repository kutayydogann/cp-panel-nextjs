import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, TextField, Typography, CardHeader, CardContent, Divider, Button, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const initialData = {
  username: '',
  company: '',
  email: '',
  identificationNumber: '',
  number: ''
};

const AccountSettings = () => {
  // ** State
  const [formData, setFormData] = useState(initialData);
  
  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    // Add logic for saving form data
  };

  const [tcNumber, setTCNumber] = useState('');

  const validateTC = (newTCNumber) => {
    const rules = [
      newTCNumber.length === 11 && /^\d+$/.test(newTCNumber),

      newTCNumber.substring(0, 1) !== '0',

      ((parseInt(newTCNumber.charAt(0)) +
        parseInt(newTCNumber.charAt(2)) +
        parseInt(newTCNumber.charAt(4)) +
        parseInt(newTCNumber.charAt(6)) +
        parseInt(newTCNumber.charAt(8))) *
          7 -
        (parseInt(newTCNumber.charAt(1)) +
          parseInt(newTCNumber.charAt(3)) +
          parseInt(newTCNumber.charAt(5)) +
          parseInt(newTCNumber.charAt(7)))) %
          10 ===
        parseInt(newTCNumber.charAt(9)),

      ((parseInt(newTCNumber.charAt(0)) +
        parseInt(newTCNumber.charAt(1)) +
        parseInt(newTCNumber.charAt(2)) +
        parseInt(newTCNumber.charAt(3)) +
        parseInt(newTCNumber.charAt(4)) +
        parseInt(newTCNumber.charAt(5)) +
        parseInt(newTCNumber.charAt(6)) +
        parseInt(newTCNumber.charAt(7)) +
        parseInt(newTCNumber.charAt(8)) +
        parseInt(newTCNumber.charAt(9))) %
          10 ===
        parseInt(newTCNumber.charAt(10))),
    ];

    if (rules.every((rule) => rule)) {
      toast.success('Kimlik Numarası Doğrulandı');
    } else {
      toast.error('Geçerli bir kimlik numarası giriniz');
    }
  };

  useEffect(() => {
    if (tcNumber.length === 11) {
      validateTC(tcNumber);
    }
  }, [tcNumber]);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Hesap Bilgilerim' />
          <form>
            <Divider />
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    1. Profil Bilgilerim
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Ad Soyad'
                    onChange={(e) => handleFormChange('username', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Şirket Adı' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='email'
                    label='E-Posta'
                    onChange={(e) => handleFormChange('email', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider sx={{ mb: '0 !important' }} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    2. Kişisel Bilgilerim
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Kimlik Numarası'
                    value={tcNumber}
                    onChange={(e) => setTCNumber(e.target.value.slice(0, 11))}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='tel'
                    label='Telefon Numarası'
                    options={{ phone: true, phoneRegionCode: 'US' }}
                    value={formData.number}
                    placeholder='850 309 15 91'
                    onChange={(e) => handleFormChange('number', e.target.value)}
                    InputProps={{
                      startAdornment: <InputAdornment position='start'>TR (+90)</InputAdornment>
                    }}
                  />
                </Grid>

                <Grid item xs={12} sx={{ pt: (theme) => `${theme.spacing(6.5)} !important` }}>
                  <Button variant='contained' sx={{ mr: 4 }} onClick={handleSave}>
                    Güncelle
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AccountSettings;
