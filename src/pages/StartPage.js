import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import Button from "../components/Button";


const Start = () => {
  const { user } = useSession();
  return (
    <div>
        <Button children={"Salut"}/>
        <Button>
          <Link to="/create" onClick={() => createGame(user)}> Nouvelle partie
          </Link>
        </Button>
      <br />
      <Link to="/join">
        Rejoindre une partie
      </Link>
    </div>
  );
}

export default Start;
