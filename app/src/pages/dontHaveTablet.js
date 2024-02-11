
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



function Page({scripts,Text4,Text5,SF_STYLE,themeColorMain}){
    return(
        <Box sx={{
            display: 'flex',
            width: '100vw',
            height: "750px",
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop:"80px"
        }}
        >
        <img alt=""
            src="iPad_Mini.svg"
            style={{marginTop:"120px", marginLeft:"-140px",height:"541px"}}
        />
            <Box sx={{
                marginTop:"250px",
                height: "750px",
                width: "500px",
                marginLeft:"-40px",
            }}>
            <Text4 style={{}}>{scripts.body.DontHaveTable.text1}</Text4>
            <Text5 style={{marginTop:"22px", marginLeft:"-107px"}}>{scripts.body.DontHaveTable.text2}</Text5>
            <Grid container spacing={2}>
      {/* If the total columns don't add up to 12, the remaining space will be to the right */}
    </Grid>
            <Grid  container  direction="row" style={{marginTop:"40px",marginLeft:"90px"}} justifyContent="flex-start">
                <Grid item direction="column" justifyContent="flex-start">
                    <b style={{marginLeft:"-15px"}}>Tablet Specs</b>
                    {[1,2,3,4,5].map((i) => {
                        return(<Grid item style={{textAlign: 'left' }}  xs={3}>
                        {scripts.body.DontHaveTable.row1[i-1]}
                    </Grid>)
                    })}
                </Grid>
                <Grid  spacing={2} direction="column"  style={{marginTop:"27px",marginLeft:"140px"}}>
                    {[1,2,3,4,5].map((i) => {
                        return(<Grid item style={{textAlign: 'left' }}  xs={3}>
                            {scripts.body.DontHaveTable.row2[i-1]}
                        </Grid>)
                    })}
                </Grid>
            </Grid>


                {/*<img alt=""
                    src="Tablet_Specs.svg"
                    style={{marginLeft:"80px",marginTop:"40px"}}
                 />*/}
            <Button variant="contained" size="large" style={{backgroundColor:themeColorMain, height:'56px', width: '265px',marginTop:"30px",marginLeft:"-50px",fontFamily:SF_STYLE,textTransform:"none"}}>{scripts.body.DontHaveTable.button}</Button>
            </Box>
        </Box>
    )
}
export default Page;

