import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useUser} from '../services/User';
import Button from '../components/Button';
import firebase from '../services/Firebase';
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
`




const CodePage = ({setGame}) => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const {user} = useUser();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .firestore()
      .collection('game')
      .where('code', '==', parseInt(code))
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const newData = {...doc.data()};
          newData.players = [...newData.players, {uid: user.uid, name}];
          firebase
            .firestore()
            .collection('game')
            .doc(doc.id)
            .update(newData);

          firebase
            .firestore()
            .collection('user')
            .doc(user.uid)
            .update({gameId: doc.id});

          history.push('/wait');
        });
      })
    .catch(console.log);
  };

  return (
      <FormContainer>
    <MainDiv>
        <form onSubmit={handleSubmit}>
            <FormField>
                <label htmlFor="field">Code de la partie</label>
                    <section>
                          <input
                            type="text"
                            name="code"
                            placeholder="Ajouter le code de la partie"
                            onChange={e => setCode(e.target.value)}
                          />
                    </section>
            </FormField>
            <FormField>
                <label htmlFor="field">Pseudo pour la partie</label>
                    <section>
                          <input
                            type="text"
                            name="name"
                            placeholder="Ajouter votre nom"
                            onChange={e => setName(e.target.value)}
                          />
                    </section>
            </FormField>
            <Button>Démarrer</Button>
        </form>
    </MainDiv>
      </FormContainer>
  );
};

export default CodePage;
