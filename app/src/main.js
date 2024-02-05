import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import  { useRef, useState } from 'react';
import POS from './components/POS';

const SF_STYLE = "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const themeColorMain="#D41E1E"


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
const Text4 =  styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 39px;
    line-height: 44px;
    width: -2;
    align: center;
    letter-spacing: -1px;
`;

const Text5 =  styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
`;

const Text6 =  styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    width: -2;
    align: center;
    letter-spacing: -1px;
`;





const stepsForWorking = [
    <Box sx={{
        width: "420px",
        height: "694px",
        margin: "20px"
    }}>
        <Text3 style={{color:"#E0E0E0"}}>Step1</Text3>
        <Box sx={{
            width: "430px",
            height: "604px",
            backgroundColor:"#FFFFFF",
            marginTop: "70px",
            "border-radius": "12px;"
        }}>
            <img alt=""
                 src="/Step_1_Image.svg"
                style={{marginLeft:"-80px",marginTop:"20px"}}
            />
            <div
                className="nfc-tag"
                style={{
                    width: '370px',
                    height: '48px',
                    marginTop: '20px',
                    marginLeft: '25px',
                    fontFamily: SF_STYLE,
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '23.87px',
                }}>Customers scan an NFC tag and order food through an online menu </div>
        </Box>
    </Box>,

<Box sx={{
        width: "420px",
        height: "694px",
        margin: "20px"
    }}>
        <Text3 style={{color:"#E0E0E0"}}>Step2</Text3>
        <Box sx={{
            width: "430px",
            height: "604px",
            backgroundColor:"#FFFFFF",
            marginTop: "70px",
            "border-radius": "12px;"
        }}>
            <img alt=""
                 src="/Pop-Image.svg"
                style={{marginLeft:"-80px",marginTop:"15px"}}
            />
            <div
                className="nfc-tag"
                style={{
                    width: '370px',
                    height: '48px',
                    marginTop: '20px',
                    marginLeft: '25px',
                    fontFamily: SF_STYLE,
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '23.87px',
                }}>Handle all their orders through your POS tablet screen</div>
        </Box>
    </Box>,

<Box sx={{
    width: "420px",
    height: "694px",
    margin: "20px"
}}>
    <Text3 style={{color:"#E0E0E0"}}>Step3</Text3>
    <Box sx={{
        width: "430px",
        height: "604px",
        backgroundColor:"#FFFFFF",
        marginTop: "70px",
        "border-radius": "12px;"
    }}>
        <img alt=""
             src="/Pop-Image3.svg"
            style={{marginLeft:"-80px",marginTop:"-40px"}}
        />
        <div
            className="nfc-tag"
            style={{
                width: '370px',
                height: '48px',
                marginTop: '20px',
                marginLeft: '25px',
                fontFamily: SF_STYLE,
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '23.87px',
            }}>Your customers pay for their food, online or in-person</div>
    </Box>
</Box>,
]

function Body() {
    const contactUs_target = useRef(null);
    const [firstNameInput, setFirstNameInput] = useState(undefined);
    const [lastNameInput, setLastNameInput] = useState(undefined);
    const [emailInput, setEmailInput] = useState(undefined);
    const [phoneNumInput, setPhoneNumInput] = useState(undefined);
    const [restaurantNameInput, setRestaurantNameInput] = useState(undefined);
    const [postalCodeInput, setPostalCodeInput] = useState(undefined);

    const getDemoInput = {
        firstNameInput,
        lastNameInput,
        emailInput,
        phoneNumInput,
        restaurantNameInput,
        postalCodeInput
    }



    return(
        <Box sx={{
                width: '100vw',
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
                    >   <Button variant="contained" size="large" style={{backgroundColor:themeColorMain, height:'62px', width: '190px',textTransform: 'none', fontSize:"20px",
                            fontFamily:SF_STYLE,
                            }}>Try the Demo</Button>
                        <Button variant="outlined" size="large"  endIcon={<SendIcon />}
                            onClick = {()=>{
                                if (contactUs_target.current) {
                                    // Scroll to the target element
                                    contactUs_target.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  }
                            }}
                            style={{outlineColor:themeColorMain, color:"grey", border: '2px solid', height:'62px', width: '190px', marginLeft: '20px', textTransform: 'none',fontSize:"20px",
                            fontFamily: SF_STYLE,
                            }}>Contact us</Button>
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

                {//animation:  TBD
                }
            <img alt=""
                 src="/About_Mobile Menu_Section Animated.svg"
                 style={{marginTop:"120px"}}
            />
              <POS style={{marginLeft:"1000px",position: 'absolute'}}/>

            <img alt=""
                 src="/About_POS_Section.svg"
                 style={{}}
            />
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
                    justifyContent: 'center',
                }}>
                <Text4 style={{}}>Don't Have A Tablet?</Text4>
                <Text5 style={{marginTop:"35px", marginLeft:"-120px"}}>We got you covered</Text5>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width:'500px'
                }}>
                    <img alt=""
                        src="Tablet_Specs.svg"
                        style={{marginLeft:"80px",marginTop:"40px"}}
                    />
                    </Box>
                <Button variant="contained" size="large" style={{backgroundColor:themeColorMain, height:'62px', width: '300px',marginTop:"30px",marginLeft:"-50px",fontFamily:SF_STYLE,textTransform:"none"}}>Buy Now *Starting from 299$</Button>
                </Box>
            </Box>

            <Box sx={{
                    justifyContent: 'center',
                    width: '100vw',
                    marginTop: "100px"
                }}
            >
                <Text4 ref={contactUs_target}  style={{}}>Are You A Restaurant Owner? Join Us Today!</Text4>
                <Paper elevation={10}
                    sx={{
                        padding:"25px",
                        width: '908px',
                        height: '670px',
                        marginTop: '30px',
                        marginLeft:"340px",
                        gap: '36px',
                        borderRadius: '40px',
                    }}>
                        <Text6 style={{marginLeft: '-400px', marginTop:"20px"}}>Fill Out This Form To Get In Contact With Us</Text6>
                        <Box sx={{
                            justifyContent: 'center',
                            marginTop: "30px"
                        }}>
                            <TextField style={{width:"400px"}} color="error" id="outlined-basic" label="First name*" variant="outlined"
                                onChange={(e)=>{
                                    setFirstNameInput(e.target.value);
                                }}
                            />
                            <TextField style={{width:"400px", marginLeft:"20px"}} color="error" id="outlined-basic" label="Last name*" variant="outlined"
                                onChange={(e)=>{
                                    setLastNameInput(e.target.value);
                                }}
                            />
                        </Box>

                        <Box style={{width:"100vx", marginTop:"20px"}}>
                            <TextField style={{width:"820px"}} color="error" id="outlined-basic" label="Email*" variant="outlined"
                                onChange={(e)=>{
                                    setEmailInput(e.target.value);
                                }}
                            />
                        </Box>

                        <Box style={{width:"100vx",marginTop:"20px"}}>
                            <TextField style={{width:"820px"}} color="error" id="outlined-basic" label="Phone number*" variant="outlined"
                                onChange={(e)=>{
                                    setPhoneNumInput(e.target.value);
                                }}
                            />
                        </Box>

                        <Box style={{width:"100vx",marginTop:"20px"}}>
                            <TextField style={{width:"820px"}} color="error" id="outlined-basic" label="Restaurant name*" variant="outlined"
                                onChange={(e)=>{
                                    setRestaurantNameInput(e.target.value);
                                }}
                            />
                        </Box>

                        <Box style={{width:"100vx",marginTop:"20px"}}>
                            <TextField style={{width:"820px"}} color="error" id="outlined-basic" label="Postal code*" variant="outlined"
                                onChange={(e)=>{
                                    setPostalCodeInput(e.target.value);
                                }}
                            />
                        </Box>

                        <Box style={{width:"100vx",marginTop:"20px"}}>
                            <Button onClick={()=>{console.log(getDemoInput)}} variant="contained" size="large" style={{ borderRadius: '10px',backgroundColor:themeColorMain, height:'70px', width: '820px',marginTop:"5px",fontFamily:SF_STYLE,textTransform:"none"}}><Text6 style={{color:"white"}}>Get a Demo</Text6></Button>
                        </Box>
                        <img alt=""
                            src="req-text.svg"
                            style={{marginTop:"20px"}}
                        />
                    </Paper>
            </Box>

            <Box style={{width:"10vx", backgroundColor:"#0A0A0A", height:"420px", marginTop:"530px"}}>
            <img alt=""
                    src="/TechCafe-Footer.svg"

                />
            </Box>
        </Box>
    )
}

export default Body;
