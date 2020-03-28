import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import { useMasterGame, addPlayer } from '../services/MasterGame';
import styled from 'styled-components'

const FormField = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: .5em;
    
        &:last-child {
            margin-bottom: 0;
        }
        
        label {
            align-self: center;
            flex-shrink: 0;
            flex-basis: 100%;
            width: 100%;
            margin-bottom: 10px;
        }
        
        label:after {
            content: '*';
            color: red;
            margin-left: 5px;
        }
        
        > section {
            border: 1px solid #aaa;
            border-radius: $radius;
            display: flex;
            flex: 1;
            margin-bottom: 15px;
            input {
                border: 0;
                border-left: 1px solid #ccc;
                flex-grow: 1;
                font-size: 1.1rem;
                font-weight: 300;
                padding: .35em .5em;
            }
        }
`

const MainDiv = styled.div`
    align-self: center;
    background-color: #fefefe;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
    width: 80%;
    padding: 2rem;
    margin-bottom: 20px;
    
    @media screen and (min-width: 550px) {
        min-width: 350px;
        max-width: 450px;
        box-shadow: 0 30px 60px -30px rgba(0, 0, 0, .5);
    }
`

const FormContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (min-width: 550px) {
         width: 50vw;
    }
`

const GameCode = styled.span`
    color: salmon;
    font-weight: bold;
`


const AddPlayerForm = () => {
  const [value, setValue] = useState('');
  const { game } = useMasterGame();
    console.log("master game id", game.id);
    console.log("master game set ", game.players);
    console.log("master game", game);

  const handleSubmit = e => {
    e.preventDefault();
    value && addPlayer(value, game);
    setValue('');
  };

  return (
    /*<form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Ajouter le nom d'un joueur..."
        onChange={e => setValue(e.target.value)}
      />
      <button>+</button>
    </form>*/

      <FormContainer>
      <MainDiv>
          <form onSubmit={handleSubmit}>
            <FormField>
                <label htmlFor="field">Code de la partie</label>
                <section>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ajouter le nom d'un joueur..."
                        onChange={e => setValue(e.target.value)}
                    />
                </section>
            </FormField>
              <Button>Ajouter</Button>
          </form>
      </MainDiv>
</FormContainer>
  );
};

const CreatePage = (props) => {
  const { game } = useMasterGame();
  const players = game.players || [];

  return (
    <div>
        <h1>Vos amis peuvent se connecter avec le code <GameCode>{game.code}</GameCode></h1>
      <div>
        {players.map((player, index) => (
          <div key={index}>
            {player.name}
          </div>
        ))}
      </div>
      <AddPlayerForm/>
      <Button>
          <Link to="/night">Démarrer la partie </Link>
      </Button>
    </div>
  );
};

export default CreatePage;
