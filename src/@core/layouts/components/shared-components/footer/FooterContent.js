// ** MUI Imports
import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()} `}
        <MuiLink target='_blank' href='https://www.cargopanel.co'>
          CARGOPANEL
        </MuiLink>
        {`. Tüm Hakları Saklıdır.`}
      </Typography>
    </Box>
  )
}

export default FooterContent
