import React from 'react';
import styled from 'styled-components'


const Button1 = styled.button`
  outline:none;
  border: none;
  cursor: pointer;
  display: block;
  position: relative;
  background-color: salmon;
  font-size: 20px;
  font-weight: bold;
  color: #232624 !important;
  letter-spacing: 2px;
  padding: 8px 16px;
  margin: 8px;
  border-radius: 15px;
  box-shadow: 0 6px #D95E39;
  text-decoration: none;
  
  &:hover{
    box-shadow: 0 4px #D95E39;
    top: 2px;
    transition: top 0.5s;
  }
  &:active{
    box-shadow: none;
    top: 6px;
    transition: top 0.5s;

  }
  a {
    color: #232624 !important;
    text-decoration: none;
  } 
`


const Button = (props) => {
  const { onClick, children } = props;
  //const truc = props.children;
  return (<Button1 onClick={onClick}> { children }</Button1>);
}


// VERSION CLASS
/*class Button extends React.Component {
  render() {
    return (<button onClick={this.props.onClick}> {this.props.children} </button>);
  }
}*/

export default Button;
