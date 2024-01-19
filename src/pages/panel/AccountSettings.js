import React, { useState } from 'react';
import { Box, Grid, Card, TextField, Typography, CardHeader, CardContent, Divider, Button, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';

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

  return (
    <Grid container spacing={6}>
      {/* Account Details Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Hesap Bilgileri' />
          <form>
            <Divider />
            <CardContent>
              <Grid container spacing={5}>
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
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Kimlik Numarası' inputProps={{ maxLength: 11 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='number'
                    label='Telefon Numarası'
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
                    Kaydet
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
