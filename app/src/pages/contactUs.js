
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';


function Page({scripts,contactUs_target,Text4,Text6,themeColorMain,setFirstNameInput,
    setLastNameInput,
    setEmailInput,
    setPhoneNumInput,
    setRestaurantNameInput,
    setPostalCodeInput,
    getDemoInput,
    SF_STYLE}){
    return(<Box sx={{
        justifyContent: 'center',
        width: '100vw',
        marginTop: "100px"
    }}
    >
    <Text4 ref={contactUs_target}  style={{}}>{scripts.body.ContactUs.text1}</Text4>
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
            <Text6 style={{marginLeft: '-400px', marginTop:"20px"}}>{scripts.body.ContactUs.text2}</Text6>
            <Box sx={{
                justifyContent: 'center',
                marginTop: "30px"
            }}>
                <TextField style={{width:"400px"}} color="error" id="outlined-basic" label={scripts.body.ContactUs.label1} variant="outlined"
                    onChange={(e)=>{
                        setFirstNameInput(e.target.value);
                    }}
                />
                <TextField style={{width:"400px", marginLeft:"20px"}} color="error" id="outlined-basic" label={scripts.body.ContactUs.label2} variant="outlined"
                    onChange={(e)=>{
                        setLastNameInput(e.target.value);
                    }}
                />
            </Box>

            <Box style={{width:"100vx", marginTop:"20px"}}>
                <TextField style={{width:"820px"}} color="error" id="outlined-basic" label={scripts.body.ContactUs.label3} variant="outlined"
                    onChange={(e)=>{
                        setEmailInput(e.target.value);
                    }}
                />
            </Box>

            <Box style={{width:"100vx",marginTop:"20px"}}>
                <TextField style={{width:"820px"}} color="error" id="outlined-basic" label={scripts.body.ContactUs.label4} variant="outlined"
                    onChange={(e)=>{
                        setPhoneNumInput(e.target.value);
                    }}
                />
            </Box>

            <Box style={{width:"100vx",marginTop:"20px"}}>
                <TextField style={{width:"820px"}} color="error" id="outlined-basic" label={scripts.body.ContactUs.label5} variant="outlined"
                    onChange={(e)=>{
                        setRestaurantNameInput(e.target.value);
                    }}
                />
            </Box>

            <Box style={{width:"100vx",marginTop:"20px"}}>
                <TextField style={{width:"820px"}} color="error" id="outlined-basic" label={scripts.body.ContactUs.label6} variant="outlined"
                    onChange={(e)=>{
                        setPostalCodeInput(e.target.value);
                    }}
                />
            </Box>

            <Box style={{width:"100vx",marginTop:"20px"}}>
                <Button onClick={()=>{console.log(getDemoInput)}} variant="contained" size="large" style={{ borderRadius: '10px',backgroundColor:themeColorMain, height:'70px', width: '820px',marginTop:"5px",fontFamily:SF_STYLE,textTransform:"none"}}><Text6 style={{color:"white"}}>{scripts.body.ContactUs.button1}</Text6></Button>
            </Box>
            <img alt=""
                src="req-text.svg"
                style={{marginTop:"20px"}}
            />
        </Paper>
    </Box>
)}


export default Page;
