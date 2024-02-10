
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';



function Page({scripts,Text4,Text5,SF_STYLE,themeColorMain}){
    return(
        <Box sx={{
            display: 'flex',
            width: '100vw',
            height: "750px",
            justifyContent: 'center',
            flexDirection: 'row',
        }}
        >
        <img alt=""
            src="iPad_Mini.svg"
            style={{marginTop:"120px", marginLeft:"-140px"}}
        />
            <Box sx={{
                marginTop:"250px",
                height: "750px",
                width: "500px",
                marginLeft:"-40px",
                justifyContent: "flex-start",
            }}>
            <Text4 style={{}}>{scripts.body.DontHaveTable.text1}</Text4>
            <Text5 style={{marginTop:"35px", marginLeft:"-120px"}}>{scripts.body.DontHaveTable.text2}</Text5>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                width:'500px'
            }}>
                <img alt=""
                    src="Tablet_Specs.svg"
                    style={{marginLeft:"80px",marginTop:"40px"}}
                 />
                {/*<img alt=""
                    src="Tablet_Specs.svg"
                    style={{marginLeft:"80px",marginTop:"40px"}}
                 />*/}
                </Box>
            <Button variant="contained" size="large" style={{backgroundColor:themeColorMain, height:'62px', width: '300px',marginTop:"30px",marginLeft:"-50px",fontFamily:SF_STYLE,textTransform:"none"}}>{scripts.body.DontHaveTable.button}</Button>
            </Box>
        </Box>
    )
}
export default Page;

