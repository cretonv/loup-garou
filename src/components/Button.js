import React from 'react';


const Button = (props) => {
  const { onClick, children } = props;
  //const truc = props.children;
  return (<button onClick={onClick}> { children }</button>);
}


// VERSION CLASS
/*class Button extends React.Component {
  render() {
    return (<button onClick={this.props.onClick}> {this.props.children} </button>);
  }
}*/

export default Button;
