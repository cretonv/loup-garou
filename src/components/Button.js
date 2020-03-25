import React from 'react';
import styled from 'styled-components'


const Button1 = styled.button`
  border-radius: 3px;
  cursor: pointer;
  padding: 8px 16px;
  border: none;
  background-color: salmon;
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
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
