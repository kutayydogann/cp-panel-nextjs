// ** React Imports
import { useState } from 'react'
import { Box, Grid, Card, Typography, CardHeader, CardContent, Divider, Button, } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

// ** Next Import
import Link from 'next/link'
import { useRouter } from 'next/router';

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioBasic from 'src/@core/components/custom-radio/basic'

const initialData = {
  username: '',
  company: '',
  email: '',
  identificationNumber: '',
  number: ''
};

const Addresses = () => {

  const [formData, setFormData] = useState(initialData);
  const [selectedIconRadio, setSelectedIconRadio] = useState('');
  const [selectedBasicRadio, setSelectedBasicRadio] = useState('');

  const handleBasicRadioChange = (prop) => {
    setSelectedBasicRadio(typeof prop === 'string' ? prop : prop.target.value);
  };

  const handleIconRadioChange = (prop) => {
    setSelectedIconRadio(typeof prop === 'string' ? prop : prop.target.value);
  };

  const router = useRouter();

  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push('/');
  };

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const sender = [
    {
      value: 'home',
      isSelected: true,
      title: 'Kutay Doğan',
      meta: <CustomChip rounded size='small' skin='light' label='Bireysel' color='primary' />,
      content: (
        <Box sx={{ mt: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body2' sx={{ mb: 'auto' }}>
            Kocasinan Merkez Mah. Orman 1 Sk. No: 12/3 IST
            <br />
            Telefon Numarası : +90 539 251 60 93
          </Typography>
          <Divider sx={{ my: (theme) => `${theme.spacing(2.5)} !important` }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href='/' onClick={handleEdit}>
              <Button sx={{color: 'primary.main', textDecoration: 'none' }}>
                Düzenle
              </Button>
            </Link>
            <Link href='/' onClick={handleRemove}>
              <Button sx={{color: 'primary.main', textDecoration: 'none' }}>
                Kaldır
              </Button>
            </Link>
          </Box>
        </Box>
      ),
    },
  ];

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Adreslerim' />
          <form>
            <Divider />
            <CardContent>
              <Typography variant='body2' sx={{ fontWeight: 600, mb: 4 }}>Gönderici Adreslerim</Typography>
              <Grid container spacing={4}>
                {sender.map((item, index) => (
                  <Grid key={index} item xs={12} sm={4}>
                    <CustomRadioBasic
                      data={item}
                      name={`custom-radios-address-${index}`}
                      selected={selectedBasicRadio}
                      handleChange={handleBasicRadioChange}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} sx={{ pt: (theme) => `${theme.spacing(6.5)} !important` }}>
                <Button variant='outlined' sx={{ mr: 4 }}>
                  Yeni Adres Ekle
                </Button>
              </Grid>
            </CardContent>
            <Divider />
            <CardContent>
              <Typography variant='body2' sx={{ fontWeight: 600, mb: 4 }}>Alıcı Adreslerim</Typography>
              <Grid container spacing={4}>

              </Grid>
              <Grid item xs={12} sx={{ pt: (theme) => `${theme.spacing(6.5)} !important` }}>
                <Button variant='outlined' sx={{ mr: 4 }}>
                  Yeni Adres Ekle
                </Button>
              </Grid>
            </CardContent>
            <Divider />
            <CardContent>
              <Typography variant='body2' sx={{ fontWeight: 600, mb: 4 }}>Fatura Adreslerim</Typography>
              <Grid container spacing={4}>
                  
              </Grid>
              <Grid item xs={12} sx={{ pt: (theme) => `${theme.spacing(6.5)} !important` }}>
                <Button variant='outlined' sx={{ mr: 4 }}>
                  Yeni Adres Ekle
                </Button>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Addresses;
