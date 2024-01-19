// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationV1Wrapper from 'src/views/pages/auth/AuthIllustrationV1Wrapper'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '25rem' }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  fontSize: '1rem',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main
}))

const ForgotPasswordV1 = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box className='content-center'>
      <AuthIllustrationV1Wrapper>
        <Card>
          <CardContent sx={{ p: theme => `${theme.spacing(10.5, 8, 8)} !important` }}>
            <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
              <img src='/images/logo-main-black.png' alt='Logo' width={180} />
            </Box>
            <Box sx={{ mb: 6 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 700, fontSize: 20 }}>
                Şifremi Unuttum 🔒
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Şifrenizi sıfırlayabilmeniz için e-posta adresinize bir link gönderilecektir.
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <TextField autoFocus type='email' label='E-Posta' sx={{ display: 'flex', mb: 4 }} />
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                Sıfırla
              </Button>
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
                <LinkStyled href='/auth/login'>
                  <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
                  <span>Giriş Yap</span>
                </LinkStyled>
              </Typography>
            </form>
          </CardContent>
        </Card>
      </AuthIllustrationV1Wrapper>
    </Box>
  )
}
ForgotPasswordV1.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ForgotPasswordV1
