import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom-carousel.css'; // Your custom CSS file
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const texts = [
    ["Order Details",
    "Access customer's comprehensive order details instantly. Serve with precision and exceed expectations"
    ],
    ["Table layout",
    "You’ll never miss a table’s order with our colors indicating table status. Customize the layout to look like your restaurant"
    ],
    [ "Edit order with Ease",
       "Mistakes happen, but with our system, they’re easy to fix. Quickly update to ensure a flawless dining experience"
    ],[
        "Dynamic Sales and insights",
        "Gain an unfair advantage with our Sales and Revenue metrics tool. It’s not just numbers; it’s the secret behind your restaurant’s prosperity"
    ]
]

const Text1 = styled.div`
    font-family: 'SF Pro', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 60px;
    letter-spacing: -2px;
`;

const Text2 = styled.div`
    font-family: 'SF Pro', sans-serif;
    font-size: 22px;
    line-height: 28.64px;
    letter-spacing: -0.4px;

`;

function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div>
      <img
        className={className}
        onClick={onClick}
        style={{height:"48px",width:"48px"}}
        alt=""
        src="/Right_Button.svg"/>
      </div>
    );
  }

  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div>
      <img
        className={className}
        onClick={onClick}
        style={{height:"48px",width:"48px"}}
        alt=""
        src="/Left_Button.svg"/>
      </div>
    );
  }

function CustomCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true
  };

  const Card = (text1 ,text2)=> {
    return (
    <div style={{width:"400px",height:"350px"}}>
       <Text1>{text1}</Text1>
       <Text2 style={{width:"328px",margin:"20px", marginLeft:"60px", textAlign:"justify"}} >{text2}</Text2>
    </div>)
  };
  return (
    <div style={{marginTop:"220px",marginLeft:"20px",position:"absolute"}}>
        <Paper style={{padding:"50px", height:"330px", width:"550px",marginLeft:"200px", borderRadius: '16px', background: 'linear-gradient(140deg, #ffffff 0%, #f0f0f0 50%, #E3E3E3 100%),0%'}} elevation={3}>
            <Slider  {...settings}>
                {texts.map(([text1,text2])=> Card(text1, text2))}
                {/* More slides */}
            </Slider>
      </Paper>
    </div>
  );
}


export default CustomCarousel;
