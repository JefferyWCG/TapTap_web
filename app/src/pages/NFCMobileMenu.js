import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import * as React from 'react';
import './NFCMobileMenu.css';


const Text6 =  styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 54px;
    line-height: 66.83px;
    letter-spacing: -1px;

`;

const Text1 = styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 67px;
    letter-spacing: -2px;
`;



function Page({scripts,Text3,Text4,Text5}){
    useEffect(() => {
        const handleScroll = () => {
          const section1 = document.getElementById('section1');
          const section2 = document.getElementById('section2');
          const section3 = document.getElementById('section3');

          const scrollPosition = window.scrollY-1550.5;
          const height = window.innerHeight*3;
          const pageSlice = 5
          const transitionSlice = 1
          let total_slice = (pageSlice*3+transitionSlice*2)*2

          // Shorter transition range
          const fadeStart12 = height *( pageSlice/total_slice); // Transition starts after scrolling 1/4th of the viewport height
          const fadeEnd12 = height *((pageSlice+transitionSlice)/total_slice); // Transition ends at half of the viewport height

          const fadeStart23 = height *( (2*pageSlice+transitionSlice)/total_slice);
          const fadeEnd23 = height *( (2*pageSlice+2*transitionSlice)/total_slice);
            console.log(scrollPosition)
          let opacitys;
          if(scrollPosition<=fadeStart12 ){
            opacitys = [1,0,0]
          }else if(fadeStart12<scrollPosition && scrollPosition<=fadeEnd12){
            opacitys = [1- (scrollPosition-fadeStart12)*(1/(fadeEnd12-fadeStart12)),
                          (scrollPosition-fadeStart12)*(1/(fadeEnd12-fadeStart12)),
                        0]
          }else if(fadeEnd12<scrollPosition && scrollPosition<=fadeStart23){
            opacitys = [0,1,0]

          }else if(fadeStart23<scrollPosition && scrollPosition<=fadeEnd23){
            opacitys = [0,
                          1-(scrollPosition-fadeStart23)*(1/(fadeEnd23-fadeStart23)),
                          (scrollPosition-fadeStart23)*(1/(fadeEnd23-fadeStart23))]
          }else if(scrollPosition>fadeEnd23){
            opacitys = [0,0,1]
          }else{
            console.log(1/0)
          }


          if(scrollPosition >0 && scrollPosition<2000){
            [section1,section2,section3].forEach((section)=>{
                section.style.position = "fixed";
                section.style.top = "63px";
            })
          }else{
            [section1,section2,section3].forEach((section)=>{
                section.style.position = "relative";
            })
          }
          section1.style.opacity = opacitys[0].toString();
          section2.style.opacity = opacitys[1].toString();
          section3.style.opacity = opacitys[2].toString();
        };


        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


    return (


    <div className="NFCMobileMenu" style={{height:"2934px"}}>

        <section className="NFCMobileMenu" id="section1" style={{marginTop:"20px"}}>
            <Box flexDirection="column">
                <Text4>{scripts.body.NFCMobileMenu.caption}</Text4>
                <Box  style={{ display: 'flex',marginTop:"10px"}}>
                <img style={{marginTop:"20px",marginLeft:"160px"}} alt=""
                        src="/Image Container Elevator1.svg"
                    />

                    <Box flexDirection="column" style={{marginLeft:"-150px",marginTop:"130px"}} >

                        <Box  style={{ display: 'flex'}}>
                            <img style={{marginTop:"-130px",marginLeft:"160px"}} alt=""
                                src="/Highlight.svg"
                            />
                            <Box flexDirection="column"style={{ "text-align":"left", marginLeft:"24px",marginTop:"30px"}} >
                                <Text1 style={{color:"#D41E1E"}}>{scripts.body.NFCMobileMenu.animation[0]}</Text1>
                                <Text5 style={{width:"627px","text-align": "left",marginTop:"10px"}}>{scripts.body.NFCMobileMenu.detail[0]}</Text5>
                                <Text6 style={{color:"#9E9E9E", marginTop:"30px"}}> {scripts.body.NFCMobileMenu.animation[1]} </Text6>
                                <Text6 style={{color:"#9E9E9E", marginTop:"20px"}}> {scripts.body.NFCMobileMenu.animation[2]} </Text6>

                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Box>
        </section>
        <section className="NFCMobileMenu"  id="section2" style={{marginTop:"20px"}} >
        <Box flexDirection="column" >
                <Text4 style={{"z-index":100000}}>{scripts.body.NFCMobileMenu.caption}</Text4>
                <Box  style={{ display: 'flex',marginTop:"-20px", "z-index":-1}}>
                <img style={{marginTop:"20px",marginLeft:"160px"}} alt=""
                        src="/Image Container Elevator.svg"
                    />

                    <Box flexDirection="column" style={{marginLeft:"-150px",marginTop:"160px"}} >

                        <Box  style={{ display: 'flex'}}>
                            <img style={{marginTop:"40px",marginLeft:"160px"}} alt=""
                                src="/Highlight2.svg"
                            />
                            <Box flexDirection="column"style={{ "text-align":"left", marginLeft:"24px"}} >
                                <Text6 style={{color:"#9E9E9E", marginTop:"30px"}}> {scripts.body.NFCMobileMenu.animation[0]} </Text6>
                                <Text1 style={{color:"#D41E1E",marginTop:"15px"}}>{scripts.body.NFCMobileMenu.animation[1]}</Text1>
                                <Text5 style={{width:"627px","text-align": "left",marginTop:"5px"}}>{scripts.body.NFCMobileMenu.detail[1]}</Text5>
                                <Text6 style={{color:"#9E9E9E", marginTop:"20px"}}> {scripts.body.NFCMobileMenu.animation[2]} </Text6>

                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Box>
        </section>
        <section className="NFCMobileMenu" id="section3" style={{marginTop:"20px" ,"z-index":1}}>
        <Box flexDirection="column">
                <Text4>{scripts.body.NFCMobileMenu.caption}</Text4>
                <Box  style={{ display: 'flex',marginTop:"-20px"}}>
                <img style={{marginTop:"20px",marginLeft:"160px"}} alt=""
                        src="/Image Container Elevator3.svg"
                    />

                    <Box flexDirection="column" style={{marginLeft:"-150px",marginTop:"160px"}} >

                        <Box  style={{ display: 'flex'}}>
                            <img style={{marginTop:"195px",marginLeft:"160px"}} alt=""
                                src="/Highlight3.svg"
                            />
                            <Box flexDirection="column"style={{ "text-align":"left", marginLeft:"24px",marginTop:"30px"}} >
                                <Text6 style={{color:"#9E9E9E", marginTop:"0px"}}> {scripts.body.NFCMobileMenu.animation[0]} </Text6>
                                <Text6 style={{color:"#9E9E9E", marginTop:"15px"}}> {scripts.body.NFCMobileMenu.animation[1]} </Text6>
                                <Text1 style={{color:"#D41E1E", marginTop:"15px"}}>{scripts.body.NFCMobileMenu.animation[2]}</Text1>
                                <Text5 style={{width:"627px","text-align": "left",marginTop:"10px"}}>{scripts.body.NFCMobileMenu.detail[2]}</Text5>

                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Box>
        </section> {/* New section */}

    </div>
    )
}
export default Page
