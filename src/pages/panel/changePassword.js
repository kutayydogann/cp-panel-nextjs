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

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Şifre Değiştirme' />
          <form>
            <Divider />
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    type='password'
                    label='Mevcut Şifre'
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    type='password'
                    label='Yeni Şifre'
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    type='password'
                    label='Yeni Şifre (Tekrar)'
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
