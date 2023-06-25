import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
 
      <Layout>
       <Box sx={{my:10,ml:10,"& h4":{fontWeight:'bold',mb:2}}}>
        <Typography variant='h4'>Contact My Resturant</Typography>
        <p>
        Etiam tempus a ex id auctor. Duis eleifend, lorem eu porta tristique, arcu orci dapibus nulla, sed molestie nulla urna eget tortor. Nam at dictum odio. Suspendisse quis accumsan turpis, non vehicula ligula. Phasellus vel erat sed mi pharetra convallis. In gravida iaculis condimentum.
        </p>
       </Box>

       <Box sx={{m:3,width:"600px",ml:10,"@media (max-width:600px)":{
        width:'300px'
       }}}>
        <TableContainer component={Paper}>
    <Table aria-label='contact table'>
      <TableHead>
      <TableRow>
        <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>Contact details</TableCell>
      </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
          <SupportAgentIcon sx={{color:'red',pt:1}} /> +923470005321 (tollfree)
          </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
          <EmailIcon sx={{color:'red',pt:1}} /> subhansheikh5853@gmail.com
          </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
          <CallIcon sx={{color:'green',pt:1}} /> 03415399538
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
        </TableContainer>
       </Box>
      </Layout>
   
  )
}

export default Contact
