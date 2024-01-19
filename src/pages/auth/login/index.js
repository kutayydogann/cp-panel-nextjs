// ** React Imports
import { useState, useEffect } from 'react';

// ** Next Import
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import axios from 'axios';
import toast from 'react-hot-toast'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationV1Wrapper from 'src/views/pages/auth/AuthIllustrationV1Wrapper'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '25rem' }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  useEffect(() => {
    console.log('useEffect çalıştı. isReady:', router.isReady);
  }, [router.isReady]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Axios isteği
      const response = await axios.post('http://localhost/mynextapp/inc-user.php', values);

      // İsteğin başarılı olup olmadığını kontrol et
      if (response.data === 'Giriş başarılı!') {
        toast.success('Giriş başarılı!');
        
        // Yönlendirme işlemi
        router.replace('/panel/home');
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      console.error('Bir hata oluştu:', error);
      
      // Axios hatası
      toast.error('E-posta veya şifre hatalı!');
    }
  };
  
  return (
    <Box className='content-center'>
      <AuthIllustrationV1Wrapper>
        <Card>
          <CardContent sx={{ p: (theme) => `${theme.spacing(10.5, 8, 8)} !important` }}>
            <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
              <img src='/images/logo-main-black.png' alt='Logo' width={180} />
            </Box>
            <Box sx={{ mb: 6 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 700, fontSize: 20 }}>
                {`Giriş Yap`}
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleLogin}>
              <TextField
                autoFocus
                fullWidth
                id='email'
                name='email'
                label='E-Posta'
                sx={{ mb: 4 }}
                value={values.email}
                onChange={handleChange('email')}
              />
              <FormControl fullWidth sx={{ mb: 1.5 }}>
                <InputLabel htmlFor='password'>Şifre</InputLabel>
                <OutlinedInput
                  label='Şifre'
                  value={values.password}
                  id='password'
                  name='password'
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Box
                sx={{
                  mb: 1.75,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <FormControlLabel control={<Checkbox />} label='Beni Hatırla' />
                <LinkStyled href='/auth/forgot-password'>Şifremi Unuttum</LinkStyled>
              </Box>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                Giriş Yap
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>Hesabınız yok mu?</Typography>
                <Typography>
                  <LinkStyled href='/auth/register' sx={{ fontSize: '1rem' }}>
                    Hesap Oluştur
                  </LinkStyled>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
      </AuthIllustrationV1Wrapper>
    </Box>
  );
}

LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage;
