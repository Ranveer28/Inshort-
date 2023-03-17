import { Box,  Typography,styled } from '@mui/material'
import React from 'react'


const Container =styled(Box)(({theme})=>({
 
    background:'#f44336',
    color:'#fff',
    display:'flex',
    alignItems:'center',
    height:40,
    marginBottom:30,
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))

const Text =styled(Typography)`
font-size:14px;
font-weight:300;
margin-left:50px;
`
const Image=styled('img')({
    height:34,
    '&:last-Child':{
        margin:'0 15px 0 20px'
    }
})
const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

  return (
    <Container>
        <Text>
            For the Beast experience use inshortd app on your smartphone
        </Text>
        <Box style={{display:'flex',marginLeft:'auto'}}>
            <Image src={appleStore} alt="img"/>
            <Image src={googleStore} alt="img"/>


        </Box>
    </Container>
  )
}

export default InfoHeader