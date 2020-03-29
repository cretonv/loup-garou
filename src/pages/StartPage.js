import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import Button from "../components/Button";
import styled from 'styled-components'

const PageTitle = styled.div`
    text-align: center;
    color: salmon;
    font-size: 50px;
    font-family: 'Metal Mania', cursive;
`



const Start = () => {
  const { user } = useSession();
  return (
    <div>
        <PageTitle> Bienvenue sur WolfParty </PageTitle>
        <Button>
          <Link to="/create" onClick={() => createGame(user)}>  Nouvelle partie
          </Link>
        </Button>
      <br />
      <Button>
          <Link to="/join">
            Rejoindre une partie
          </Link>
      </Button>
    </div>
  );
}

export default Start;
