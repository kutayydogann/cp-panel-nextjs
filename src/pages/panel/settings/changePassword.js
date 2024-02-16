import React, { useState } from 'react';
import { Grid, Card, TextField, CardHeader, CardContent, Divider, Button, InputAdornment, IconButton, FormControl, OutlinedInput, InputLabel } from '@mui/material';
import Icon from 'src/@core/components/icon';

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = (field) => {
    switch (field) {
      case 'current-password':
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case 'new-password':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirm-password':
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
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
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Mevcut Şifre</InputLabel>
                    <OutlinedInput
                      label='Mevcut Şifre'
                      id='current-password'
                      type={showCurrentPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={() => handleTogglePassword('current-password')}
                            onMouseDown={(e) => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon icon={showCurrentPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Yeni Şifre</InputLabel>
                    <OutlinedInput
                      label='Yeni Şifre'
                      id='new-password'
                      type={showNewPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={() => handleTogglePassword('new-password')}
                            onMouseDown={(e) => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon icon={showNewPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Yeni Şifre (Tekrar)</InputLabel>
                    <OutlinedInput
                      label='Yeni Şifre (Tekrar)'
                      id='confirm-password'
                      type={showConfirmPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={() => handleTogglePassword('confirm-password')}
                            onMouseDown={(e) => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon icon={showConfirmPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
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

export default ChangePassword;
