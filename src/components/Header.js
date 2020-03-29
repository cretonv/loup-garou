import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWolfPackBattalion } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Header1 = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #232624;
  border: none;
  margin-bottom: 10px;
  font-size: 60px;
  color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #ededed;
  }
`

const Header = (props) => {
  //const { onClick, children } = props;
  //const truc = props.children;
  return (
    <Header1>
        <Link to="/"><FontAwesomeIcon icon={faWolfPackBattalion}/></Link>
    </Header1>
    );
}

// VERSION CLASS
/*class Header extends React.Component {
  render() {
    return (<header>);
  }
}*/

export default Header;