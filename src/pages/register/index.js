// ** React Imports
import { useState, Fragment } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

import Flag from 'react-country-flag'
import countryCode from './countryCodes';

// ** Styled Components
const RegisterIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 575,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
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

const defaultCountry = 'TR';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  const schema = yup.object().shape({
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    terms: yup.bool().oneOf([true], 'Bu alan zorunludur')
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      phone: '',
      email: '',
      password: '',
      terms: false
    }
  });

  const onSubmit = data => {
    const { firstName, lastName, companyName, phone, email, password } = data;
    const phoneNumber = selectedCountry ? `${countryCode.find(country => country.value === selectedCountry).label}${data.phone}` : data.phone;
  };

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Box sx={{ mb: 6 }}>
              <img src='/images/logo-main-black.png' alt='Logo' width={200}/>
              <Typography variant='h6' sx={{ mt: 3, fontWeight: 700}}>
                {`Kayıt Ol`}
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <FormControl fullWidth>
                  <TextField
                    label='Ad'
                    name='firstName'
                    error={Boolean(errors.firstName)}
                  />
                  {errors.firstName && (
                    <FormHelperText sx={{ color: 'error.main' }}>{'Bu alan zorunludur'}</FormHelperText>
                  )}
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label='Soyad'
                    name='lastName'
                    error={Boolean(errors.lastName)}
                  />
                  {errors.lastName && (
                    <FormHelperText sx={{ color: 'error.main' }}>{'Bu alan zorunludur'}</FormHelperText>
                  )}
                </FormControl>
              </Box>
              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                label='Şirket Adı (Opsiyonel)'
                name='companyName'
                error={Boolean(errors.companyName)}
              />
              </FormControl>
              <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'flex-end' }}>
                <FormControl fullWidth sx={{ flex: '4' }}>
                  <InputLabel htmlFor='country-code'>Ülke Kodu</InputLabel>
                  <Select
                    label='Ülke Kodu'
                    id='country-code'
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                  {countryCode.map((country) => (
                    <MenuItem key={`${country.value}-${country.label}`} value={country.value}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Flag countryCode={country.value} svg style={{ marginRight: '0.5em' }} />
                        <span>{country.label}</span>
                      </div>
                    </MenuItem>
                  ))}
                  </Select>
                  {errors.phone && (
                    <FormHelperText sx={{ color: 'error.main' }}>{' '}</FormHelperText>
                  )}
                </FormControl>
                <FormControl fullWidth sx={{ flex: '8' }}>
                  <TextField
                    label='Telefon Numarası'
                    name='phone'
                    error={Boolean(errors.phone)}
                  />
                  {errors.phone && (
                    <FormHelperText sx={{ color: 'error.main' }}>{'Bu alan zorunludur'}</FormHelperText>
                  )}
                </FormControl>
              </Box>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <TextField
                  label='E-Posta'
                  name='email'
                  error={Boolean(errors.email)}
                />
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{'Bu alan zorunludur'}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                  Şifre
                </InputLabel>
                <OutlinedInput
                  label='Şifre'
                  name='password'
                  error={Boolean(errors.password)}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password && (
                  <FormHelperText sx={{ color: 'error.main' }}>{'Şifreniz en az 8 karakterden oluşmalıdır'}</FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.terms)}>
                <Controller
                  name='terms'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <FormControlLabel
                        sx={{
                          ...(errors.terms ? { color: 'error.main' } : null),
                          '& .MuiFormControlLabel-label': { fontSize: '0.875rem' }
                        }}
                        control={
                          <Checkbox
                            checked={value}
                            onChange={onChange}
                            sx={errors.terms ? { color: 'error.main' } : null}
                          />
                        }
                        label={
                          <Fragment>
                            <Typography
                              variant='body2'
                              component='span'
                              sx={{ color: errors.terms ? 'error.main' : '' }}
                            >
                            </Typography>
                            <LinkStyled href='https://cargopanel.co/kvkk' target='_blank'>
                              KVKK Aydınlatma Metni{' '}
                            </LinkStyled>
                            ve{' '}
                            <LinkStyled href='https://cargopanel.co/hizmet-sozlesmesi' target='_blank'>
                            Hizmet Sözleşmesini{' '}
                            </LinkStyled>
                            okudum, kabul ediyorum.
                          </Fragment>
                        }
                      />
                    )
                  }}
                />
                {errors.terms && (
                  <FormHelperText sx={{ mt: 0, color: 'error.main' }}>{errors.terms.message}</FormHelperText>
                )}
              </FormControl>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                Kayıt Ol
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>Hesabınız var mı?</Typography>
                <Typography variant='body2'>
                  <LinkStyled href='/login' sx={{ fontSize: '1rem' }}>
                    Giriş Yap
                  </LinkStyled>
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </RightWrapper>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 8, 8, 0)
          }}
        >
          <RegisterIllustration
            alt='register-illustration'
            src={`/images/login.webp`}
          />
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
    </Box>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register