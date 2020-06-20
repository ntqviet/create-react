import React from 'react';
import styled from 'styled-components';
const Banner = (props) => {
        return (
        <>
           <BannerBox primary = {props.primary}>{props.text}</BannerBox>
            
        </>
        )
}
export default Banner;

const BannerBox = styled.div ` 
    display:flex;
    justify-content:center;
    color:black;
    background-color:${ props => props.primary ? "#82FA58" : "#D7DF01" };
    height: 40px;
    width:min(100%, 442px);
    opacity:0.8;
    padding:5px;
`;
