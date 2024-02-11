
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const Text1 = styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 60px;
    letter-spacing: -3px;
    width: 488px;
    height: 120px;
`;

const Text2 = styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 28.64px;
    width: 488px;
    height: 58px;
`;

function Page({scripts, themeColorMain,contactUs_target, SendIcon,SF_STYLE}){
    return(
        <Box sx={{
            display: 'flex',
            width: '100vw',
            height: "717px",
            justifyContent: 'center',
            flexDirection: 'row',
        }}
        >
        <Paper elevation={3}
            sx={{
                padding:"25px",
                width: '558px',
                height: '380px',
                marginTop: '214px',
                gap: '36px',
                justifyContent: 'left',
                marginLeft:"50px"
            }}
        >
            <Text1  style={{alignItems: 'left'}}>{scripts.body.Hero.caption}</Text1>
            <Text2 style={{"margin-top":"30px", justifyContent: 'flex-end'}}>{scripts.body.Hero.subCaption}</Text2>
            <Box sx={{
                width: '434px',
                height: '56px',
                justifyContent: 'flex-end',
                marginTop: '30px',
                '& button': { m: 1 }
            }}
                style={{justifyContent: 'flex-end'}}
            >   <Button variant="contained" size="large" style={{backgroundColor:themeColorMain, height:'62px', width: '190px',textTransform: 'none', fontSize:"20px",
                    fontFamily:SF_STYLE,
                    }}>{scripts.body.Hero.button1}</Button>
                <Button variant="outlined" size="large"  endIcon={<SendIcon />}
                    onClick = {()=>{
                        if (contactUs_target.current) {
                            // Scroll to the target element
                            contactUs_target.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }}
                    style={{outlineColor:themeColorMain, color:"grey", border: '2px solid', height:'62px', width: '190px', marginLeft: '20px', textTransform: 'none',fontSize:"20px",
                    fontFamily: SF_STYLE,
                    }}>{scripts.body.Hero.button2}</Button>
            </Box>
        </Paper>

        <Box sx={{
            width: "756px",
            height: "566px",
            marginTop: '169px',
            marginLeft: '40px',
          //border: '1px solid #ccc',
            display: 'flex',
        }}
        >
        <img alt=""
                src="/iPhone13.svg"
                position="absolute"
                style={{position:"absolute"}}

            />
            <img alt=""
                src="/POS_Mockup_Register.svg"
                style={{marginLeft: "120px"}}
            />
        </Box>
        </Box>
    )
}

export default Page;
