import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'



const Footer1 = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #232624;
  border: none;
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  color: #ededed;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  
`

const Copyright = styled.div`
  grid-column: 1;
  grid-row: 1;
  font-size: 13px;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  
  @media screen and (min-width: 550px) {
    font-size: 15px;
  } 
`

const FacebookIcon = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 13px;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  align-items: flex-end;
  margin-right: 10px;
  
  @media screen and (min-width: 550px) {
    font-size: 40px;
  } 
  
  &:hover {
    color: salmon;
    transition: color 0.5s;
    cursor: pointer;
  }
`

const InstagramIcon = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 13px;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  align-items: flex-end;
  margin-right: 40px;
  
  @media screen and (min-width: 550px) {
    font-size: 40px;
    margin-right: 60px;
  } 
  
  svg:hover {
    color: salmon;
    transition: color 0.5s;
    cursor: pointer;
  }
`

const TwitterIcon = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 13px;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  align-items: flex-end;
  margin-right: 70px;
  
  @media screen and (min-width: 550px) {
    font-size: 40px;
    margin-right: 110px;
  } 
  
  svg:hover {
    color: salmon;
    transition: color 0.5s;
    cursor: pointer;
  }
`





const Footer = (props) => {
    //const { onClick, children } = props;
    //const truc = props.children;
    return (
        <Footer1>
            <Copyright>©2020 WolfParty</Copyright>
            <FacebookIcon> <FontAwesomeIcon icon={faFacebookSquare}/> </FacebookIcon>
            <InstagramIcon> <FontAwesomeIcon icon={faInstagramSquare}/> </InstagramIcon>
            <TwitterIcon> <FontAwesomeIcon icon={faTwitterSquare}/> </TwitterIcon>
        </Footer1>
    )
}

// VERSION CLASS
/*class Header extends React.Component {
  render() {
    return (<header>);
  }
}*/

export default Footer;