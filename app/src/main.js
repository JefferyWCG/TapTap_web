import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import  { useRef, useState } from 'react';
import AboutPOS from './pages/aboutPOS.js';
import SendIcon from '@mui/icons-material/Send';

import Hero from './pages/hero';
import HowOurTechWork from './pages/howOurTechWork.js';
import DontHaveTable from './pages/dontHaveTablet.js';
import ContactUs from './pages/contactUs.js';
import NFCMobileMenu from './pages/NFCMobileMenu.js';


const {ENGLISH, JAPANESE} = require("./scripts/text.js")


const SF_STYLE = "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const themeColorMain="#D41E1E"


const Text3 =  styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    width: -2;
    align: center;
    letter-spacing: -1.5px;
`;
const Text4 =  styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 44px;
    width: -2;
    align: center;
    letter-spacing: -1.5px;
`;

const Text5 =  styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 400;
    font-size: 23.5px;
    line-height: 28.64px;
    letter-spacing: -0.3px;

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

function Body({scripts, setScripts}) {
    const contactUs_target = useRef(null);
    const [firstNameInput, setFirstNameInput] = useState(undefined);
    const [lastNameInput, setLastNameInput] = useState(undefined);
    const [emailInput, setEmailInput] = useState(undefined);
    const [phoneNumInput, setPhoneNumInput] = useState(undefined);
    const [restaurantNameInput, setRestaurantNameInput] = useState(undefined);
    const [postalCodeInput, setPostalCodeInput] = useState(undefined);


    const stepsForWorking = [
        <Box sx={{
            width: "382px",
            height: "655px",
            margin: "20px"
        }}>
            <Text3 style={{color:"#E0E0E0"}}>{scripts.body.HowOurTechWork.step1}</Text3>
            <Box sx={{
                width: "382px",
                height: "551px",
                backgroundColor:"#FFFFFF",
                marginTop: "45px",
                "border-radius": "12px;"
            }}>
                <img alt=""
                     src="/Step_1_Image.svg"
                    style={{marginLeft:"-80px",marginTop:"20px", height:"419px"}}
                />
                <div
                    className="nfc-tag"
                    style={{
                        width: '335px',
                        height: '48px',
                        marginTop: '10px',
                        marginLeft: '25px',
                        fontFamily: SF_STYLE,
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '23.87px',
                    }}>{scripts.body.HowOurTechWork.text1} </div>
            </Box>
        </Box>,

    <Box sx={{
            width: "382px",
            height: "655px",
            margin: "10px"
        }}>
            <Text3 style={{color:"#E0E0E0"}}>{scripts.body.HowOurTechWork.step2}</Text3>
            <Box sx={{
                width: "382px",
                height: "551px",
                backgroundColor:"#FFFFFF",
                marginTop: "55px",
                "border-radius": "12px;"
            }}>
                <img alt=""
                     src="/Pop-Image.svg"
                    style={{marginLeft:"-76px",marginTop:"15px",height:"411px"}}
                />
                <div
                    className="nfc-tag"
                    style={{
                        width: '325px',
                        height: '48px',
                        marginTop: '24px',
                        marginLeft: '25px',
                        fontFamily: SF_STYLE,
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '23.87px',
                    }}>{scripts.body.HowOurTechWork.text2}</div>
            </Box>
        </Box>,

    <Box sx={{
        width: "382px",
        height: "655px",
    }}>
        <Text3 style={{color:"#E0E0E0"}}>{scripts.body.HowOurTechWork.step3}</Text3>
        <Box sx={{
            width: "382px",
            height: "551px",
            backgroundColor:"#FFFFFF",
            marginTop: "65px",
            "border-radius": "12px;"
        }}>
            <img alt=""
                 src="/Pop-Image3.svg"
                style={{marginLeft:"-70px",marginTop:"-35px",height:"457px"}}
            />
            <div
                className="nfc-tag"
                style={{
                    width: '335px',
                    height: '48px',
                    marginTop: '25px',
                    marginLeft: '25px',
                    fontFamily: SF_STYLE,
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '23.87px',
                }}>{scripts.body.HowOurTechWork.text3}</div>
        </Box>
    </Box>,
    ]

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
                width: '100vx',
                justifyContent: 'center', // Center horizontally
                border: '1px solid #ccc',
            }}>
            <Hero scripts = {scripts} themeColorMain = {themeColorMain} SF_STYLE = {SF_STYLE}
                    SendIcon = {SendIcon} contactUs_target = {contactUs_target}
            ></Hero>

            <HowOurTechWork scripts={scripts} stepsForWorking = {stepsForWorking}></HowOurTechWork>

            <NFCMobileMenu scripts={scripts}  Text3 = {Text3} Text4 = {Text4} Text5 = {Text5}></NFCMobileMenu>


            <AboutPOS scripts ={scripts} setScripts ={setScripts} Text4 = {Text4}  Text5 = {Text5} />



            <DontHaveTable scripts = {scripts} Text4 = {Text4} Text5 = {Text5} SF_STYLE = {SF_STYLE} themeColorMain = {themeColorMain} ></DontHaveTable>


            <ContactUs
                scripts= {scripts} contactUs_target={contactUs_target} Text4 = {Text4} Text6={Text6}
                themeColorMain = {themeColorMain} setFirstNameInput = {setFirstNameInput}
                setLastNameInput = {setLastNameInput}
                setEmailInput = {setEmailInput}
                setPhoneNumInput = {setPhoneNumInput}
                setRestaurantNameInput = {setRestaurantNameInput}
                setPostalCodeInput= {setPostalCodeInput}
                getDemoInput = {getDemoInput}
                SF_STYLE = {SF_STYLE}
            ></ContactUs>
            <Box style={{width:"10vx", backgroundColor:"#0A0A0A", height:"420px", marginTop:"530px"}}>
            <img alt=""
                    src="/TechCafe-Footer.svg"

                />
            </Box>
        </Box>
    )
}

export default Body;
