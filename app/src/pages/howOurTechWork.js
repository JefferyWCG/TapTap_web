
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const Text3 =  styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    width: -2;
    align: center
`;

function Page({scripts, stepsForWorking}){

    return(
        <Box sx={{
            display: 'flex',
            width: '100vw',
            height: "832px",
            justifyContent: 'center',
            flexDirection: 'row',
        }}>
            <img alt=""
                src="/Union.svg"
                style={{position:"absolute",width:"100vw", marginTop:"-190px", "zIndex": -10}}

            />
            <Box style={{position:"absolute"}}>
                <Text3 style={{color:"#FFFFFF", marginTop:"60px"}}>{scripts.body.HowOurTechWork.caption}</Text3>
                <Box
                    sx={{
                        width:"1200px",
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
    )
}
export default Page;
