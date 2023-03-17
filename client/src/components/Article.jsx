import { Card, CardContent,Grid, Typography,styled } from "@mui/material"





const Image =styled('img')({
    height:268,
    width:'88%',
    objectFit:'cover',
    borderRadius:5

})


const Componets =styled(Card)`
margin-bottom:20px;
box-shadow:0 2px 5px 0 rgb(0,0,0/16%),02px,10,0 rgb(0,0,0/12%)
`
const Container =styled(CardContent)`
padding:8px;
padding-bottom:4px ! impotant; 
`
const Text =styled(Typography)`
font-size:22px;
font-wight:300;
color:#44444d;
line-height:27px;
`

const RightContainer = styled(Grid)(({ theme }) => ({
    margin: '5px 0px 0 -25px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.between('sm', 'lg')]: {
        padding: '0 5px'
    },
    [theme.breakpoints.down('sm')]: {
        margin: '5px 0'
    }
}));
const Author =styled(Typography)`
color:#808290;
font-size:12px;
line-height:22px
`
const Descrpition=styled(Typography)`
#44444;
line-height:22px;
margin-Top:5px;
font-weight:300;
`

const Publisher =styled(Typography)`
font-size:12px;
margin-top:auto;
`
const Article = ({data}) => {
  return (
    <Componets>
        <Container>
            <Grid container>
                <Grid lg={5} sm={5} xs={12} item>
                    <Image src={data.url} alt="img" />
                </Grid>

                <RightContainer item lg={7} md={7} sm={12} xs={12}>
                <Text> {data.title}</Text>
                <Author> <b>short</b> by {data.author} / {new Date(data.timestamp).toDateString()}</Author>

                    <Descrpition>{data.description}</Descrpition>    
                    <Publisher>
                        {/* read more at <a href={data.link} >{data.publisher}</a> */}
                        read more at <a href={data.pp} style={{color:'yellow'}} >{data.nn}</a>

                        </Publisher>    
                </RightContainer>
            </Grid>
        </Container>
    </Componets>
  )
  
}

export default Article