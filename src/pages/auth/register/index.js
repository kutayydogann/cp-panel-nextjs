// ** React Imports
import { useState, Fragment } from 'react'

// ** Next Import
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
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
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1.75),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const Register = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const addUser = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    try {
      const response = await axios.post('http://localhost/mynextapp/addUser.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      toast.success(response.data);
      router.replace('/panel/home');
    } catch (error) {
      console.error("Hata:", error);
      toast.error('Kayıt başarısız');
    }
  };  

  return (
    <Box className='content-center'>
      <AuthIllustrationV1Wrapper>
        <Card>
          <CardContent sx={{ p: theme => `${theme.spacing(10.5, 8, 8)} !important` }}>
            <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
              <img src='/images/logo-main-black.png' alt='Logo' width={180}/>
            </Box>
            <Box sx={{ mb: 6 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 700, fontSize: 20 }}>
                Hesap Oluştur
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={addUser}>
              <TextField autoFocus fullWidth name='user_name' id='user_name' label='Ad Soyad' sx={{ mb: 4 }} />
              <TextField fullWidth name='company_name' id='company_name' label='Şirket Adı (Opsiyonel)' sx={{ mb: 4 }} />
              <TextField fullWidth type='email' name='user_email' id='user_email' label='E-Posta' sx={{ mb: 4 }} />
              <TextField fullWidth name='user_phone' id='user_phone' label='Telefon Numarası' sx={{ mb: 4 }} />
              <FormControl fullWidth>
                <InputLabel htmlFor='user_password'>Şifre</InputLabel>
                <OutlinedInput
                  label='Şifre'
                  value={values.password}
                  id='user_password'
                  name='user_password'
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControlLabel
                sx={{ py: 2 }}
                control={<Checkbox />}
                label={
                  <Fragment>
                    <LinkStyled href='/' onClick={e => e.preventDefault()}>
                      KVKK Aydınlatma Metnini
                    </LinkStyled>
                    <span> ve </span>
                    <LinkStyled href='/' onClick={e => e.preventDefault()}>
                      Hizmet Sözleşmesini
                    </LinkStyled>
                    <span> okudum, kabul ediyorum.</span>
                  </Fragment>
                }
              />
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                Kayıt Ol
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>Hesabınız var mı?</Typography>
                <Typography>
                  <LinkStyled href='/auth/login' sx={{ fontSize: '1rem' }}>
                    Giriş Yap
                  </LinkStyled>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
      </AuthIllustrationV1Wrapper>
    </Box>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Register
