import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  {
    flex: 0.25,
    minWidth: 200,
    field: 'username',
    headerName: 'Ad Soyad'
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: 'email',
    headerName: 'E-Posta'
  },
];

const TableBasic = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    show();
  }, [searchValue]);

  const show = () => {
    axios.get("http://localhost/mynextapp/view.php")
      .then(response => {
        console.log("Gelen Veri: ", response.data);
        const filteredUsers = response.data
          .filter(user => 
            user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.email.toLowerCase().includes(searchValue.toLowerCase())
          )
          .reverse();
        setUsers(filteredUsers);
      })
      .catch(error => {
        console.error("Veri Çekme Hatası: ", error);
      });
  }

  return (
    <Card>
      <CardHeader title='Sevkiyatlarım' />
      <Box sx={{ height: 500 }}>
        <DataGrid columns={columns} rows={users} />
      </Box>
    </Card>
  );
}

export default TableBasic;
