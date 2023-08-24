import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Text1 = styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 59px;
    line-height: 60px;
    letter-spacing: -3px;
    width: 508px;
    height: 120px;
`;

const Text2 = styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 28.64px;
    width: 498px;
    height: 120px;
`;

const Text3 =  styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    width: -2;
    align: center
`;

const stepsForWorking = [
    <Box sx={{
        width: "420px",
        height: "674px",
        margin: "30px"
    }}>
        <Text3 style={{color:"#E0E0E0"}}>Step1</Text3>
        <Box sx={{
            width: "420px",
            height: "584px",
            backgroundColor:"#FFFFFF",
            marginTop: "70px",
            "border-radius": "12px;"
        }}>
            <img alt=""
                 src="/Step_1_Image.svg"
                 style={{width:"400px",height:"570px"}}

            />
        </Box>
    </Box>,


<Box sx={{
    width: "420px",
    height: "674px",
    margin: "30px"
}}>
    <Text3 style={{color:"#E0E0E0"}}>Step1</Text3>
    <Box sx={{
        width: "420px",
        height: "584px",
        backgroundColor:"#FFFFFF",
        marginTop: "70px",
        "border-radius": "12px;"
    }}>
        <img alt=""
             src="/Step_1_Image.svg"
             style={{width:"400px",height:"570px"}}

        />
    </Box>
</Box>,
 <Box sx={{
    width: "420px",
    height: "674px",
    margin: "30px"
}}>
    <Text3 style={{color:"#E0E0E0"}}>Step1</Text3>
    <Box sx={{
        width: "420px",
        height: "584px",
        backgroundColor:"#FFFFFF",
        marginTop: "70px",
        "border-radius": "12px;"
    }}>
        <img alt=""
             src="/Step_1_Image.svg"
             style={{width:"400px",height:"570px"}}

        />
    </Box>
</Box>,
]

function body() {
    return(
        <Box sx={{
                width: '100vw',
                height: "4717px",
                justifyContent: 'center', // Center horizontally
                border: '1px solid #ccc',
            }}
        >
            <Box sx={{
                    display: 'flex',
                    width: '100vw',
                    height: "714px",
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
                        justifyContent: 'left'
                    }}
                >
                    <Text1  style={{alignItems: 'left'}}>Fast order and pay for restaurants</Text1>
                    <Text2 style={{"margin-top":"30px", justifyContent: 'flex-end'}}>Become more profitable by simplifying the restaurant experience for your customers.</Text2>
                    <Box sx={{
                        width: '434px',
                        height: '56px',
                        justifyContent: 'flex-end',
                        marginTop: '-30px',
                        '& button': { m: 1 }
                    }}
                        style={{justifyContent: 'flex-end'}}
                    >   <Button variant="contained" size="large" style={{height:'62px', width: '190px'}}>Try the Demo</Button>
                        <Button variant="outlined" size="large" endIcon={<SendIcon />}
                            style={{border: '2px solid', height:'62px', width: '190px', marginLeft: '20px'}}>Contact us</Button>
                     </Box>
                </Paper>

                <Box sx={{
                    width: "780px",
                    height: "634px",
                    marginTop: '169px',
                    marginLeft: '90px',
                  //  border: '1px solid #ccc',
                    display: 'flex',
                }}
                >
                   <img alt=""
                        src="/iPhone13.svg"
                        width="582px"
                        height="584px"
                        position="absolute"
                        style={{position:"absolute"}}

                    />
                    <img alt=""
                        src="/POS_Mockup_Register.svg"
                        width="805px"
                        height="616px"
                        style={{marginLeft: "120px"}}
                    />
                </Box>
            </Box>

            <Box sx={{
                    display: 'flex',
                    width: '100vw',
                    height: "832px",
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}

            >
                <img alt=""
                    src="/Union.svg"
                    style={{position:"absolute",width:"100vw", marginTop:"-190px", "zIndex": -10}}

                />
                <Box style={{position:"absolute"}}>
                    <Text3 style={{color:"#FFFFFF", marginTop:"60px"}}>How Our Tech Works</Text3>
                    <Box
                        sx={{
                            width:"1400px",
                            height:"664px",
                            marginTop:"30px",
                           // border: '1px solid #ccc',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            display: 'flex',
                            }}>{stepsForWorking}</Box>
                    {}
                </Box>
            </Box>
        </Box>
    )
}

export default body;
