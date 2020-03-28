# Loup Garou

Ce code reprend le jeu du loup garou pour la dernière séance de cours avec les L2 de l'UGA.

## Déroulement de la séance

- Etant donné que le serveur Discord principal n'a pas de salon pour React, je vous invite sur un [autre serveur](https://discord.gg/qk3TzeV).
- Je suis également disponible toute la journée sur skype -- mon identifiant est pl.guhur.
- Pendant la séance, nous allons travailler sur Material UI et Styled components
- Puis un TP noté va reprendre l'ensemble des notions vues en cours.
- Pensez à cloner ce repo et à répondre aux questions en modifiant directement ce README.

## Sass

Au cas où vous avez un trou de mémoire sur Sass, voici un [rappel de la syntaxe](https://devhints.io/sass).

## Material UI

Je vous invite à regarder la vidéo de [Human Talks Paris](https://www.youtube.com/watch?v=D3tB_DGgICE).


Quelques petites questions :

- Résumer en une phrase l'intérêt de Material UI
→ Récupérer le design de nombreux composants web, à travers une librairie,  pour designer son app web de façon cohérente et efficace avec une bonne expérience utilisateur.
- Comment importer `material-ui` dans un fichier ?
→ Il faut installer material-ui sur le projet et ensuite importer les components désiré depuis '@material-ui/core/...'.
- Comment une application peut utiliser un thème à travers l'ensemble d'un projet ?
→ Il faut récupérer un component MuiThemeProvider et encapsuler son projet dans des balises <MuiThemeProvider>
- A quoi sert `createMuiTheme` ?
→ Il permet de créer un objet thème pour personnaliser tout une partie des composants importés depuis Material UI. Cette objet serras ensuite passé en paramètre de la propriété them du MuiThemeProvider 
- A quoi correspond `palette` ?
→ A toute les couleurs que l'ont va utiliser dans notre application, c'est ici qu'on les renseigne 
- Comment re-définir des propriétés ?
→ Par le biais de la clé overrides de createMuiTheme
- A quoi vous fait penser `withStyle` ? Comment l'utiliser ?
→ Il permet de fournir un fichier style à l'application pour personaliser au mieux les components. Pour l'utiliser , il faut le placer au niveau de l'export default
- Reproduire les deux boutons rouge et bleu présentées dans la vidéo.


```javascript
import React, { Component } from "React"
import { MuiThemeProvider, createMuiTheme, withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import blue from "@material-ui/core/colors/blue"

class App extends Component {
    render() {
        return(
            <MuiThemeProvider theme={theme}>
                <div>
                    <Button className={this.props.classes.leftButton}> Bonjour </Button>
                    <Button> Mr. Guhur </Button>
                <div>
            </MuiThemProvider>
        )
    }
}

const theme = createMuiTheme({
    palette: {
        primary: blue
    },
    typography: {
        fontSize: 15,
        font-family: "Arial"
    }
    overrides: {
        MuiButton: {
            root: {
            backgroundColor: "red",
            "&:hover": { backgroundColor: "yellow" }
        }
    }
})

const styles = {
    leftButton: {
        backgroundColor: 'blue'
    }
}

export default withStyles(styles)(App) 
```



## Styled Components

De la même manière, voici une [vidéo](https://www.youtube.com/watch?v=mS0UKNBh-Ig) pour introduire le sujet.

Quelques petites questions :

- Qu'est-ce que le CSS-in-JS ?
→ C'est une méthode pour écrire du CSS à travers le JS afin d'avoir uj code CSS plus basé sur la composition et l'éritage du style. 
- Qu'est-ce que sont les tagged templates (délimitées par des backticks) ?
→ Une manière d'écrire les propriétés 
- Donner un exemple d'un bouton personnalisé avec et sans les tagged templates ?

→ La syntaxe sans les tagged templates :
```javascript
const Button = styles.button(["background-color: coral"])
```

→ La syntaxe avec les tagged templates :

```javascript
const Button = styled.button`
	background-color: coral;
`
```
- Comment utilise-t-on les props dans cette librarie ?
→ Les props sont utilisables par le biais du DOM, mais on peut aussi accéder aux props directement dans le composant et faire du style conditionnel avec ça
- Reprendre l'exemple du Material UI avec styled-components; l'écrire avec la composition et avec l'héritage.

```javascript
import React from 'react';
import styled from 'styled-components'

const commonstyles = `
cursor: pointer;
padding: 4px 8px;
border: solid;
`

const Button1 = styled.button`
  ${commonstyles}

  background-color: blue
`

const Button2 = styled.button`
    ${commonstyles}
    
    background-color: red
`

function App(props) {
  return (
    <div>
        <Button1> Bonjour </Button1>
        <Button2> Mr. Guhur </Button2>
    <div>
  );
}




export default (App);
``` 

```javascript 
// App.js
import React from 'react';


function App(props) {
  return (
    <div>
        <Button1> Bonjour </Button1>
        <Button1Bis> Mr. Guhur </Button1bis>
    <div>
  );
}

export default (App);

// Button1Bis.js
import styled from 'styled-components'

export const Button1 = styled.button`
    cursor: pointer;
    padding: 4px 8px;
    border: solid;
    background-color: blue
`

export const Button1Bis = styled(Button1)`
    background-color: red;
`
``` 



- Quelles sont les fonctions du contexte de styled-components ?
→ Le contexte de styled-components permet de styliser via le thème 


## Mise en place du design

Pour mettre en pratique ces notions, je vous propose de designer une application reprenant le principe de jeu du loup garou.

Cette plateforme est entièrement numérique, ce qui permet de s'affranchir d'un maître du jeu, et donc d'avoir un joueur supplémentaire.

A l'initialisation de la partie, un joueur démarre une partie. Un court identifiant est alors communiqué aux autres joueurs, qui doivent rejoindre la partie.
Lorsque tous les joueurs ont rejoint la partie, la partie peut démarrer. Chaque joueur joue à tour de rôle depuis son téléphone.

Une contrainte importante est la synchronisation des joueurs : chaque joueur utilise son propre téléphone. Il reçoit un message lorsque c'est à son tour de jouer, ou attend autrement. Pour résoudre techniquement cette contrainte, tout en évitant d'écrire une application en backend, on utilise Firebase. Firebase permet d'utiliser des observateurs, qui réagissent lors d'un appel extérieur, ce qui donne une impression de temps réel.

Une partie du code vous est fournie, afin de faciliter la mise en place de Firebase et des context providers. Il vous est demandé d'explorer le code, d'y apporter un design responsive, et de compléter l'application pour ajouter les différentes étapes de jeu.

Copier .env dans .env.local et remplir de dernier à l'aide de ses identifiants Firebase.
Activer l'authentification anonyme dans la console de Firebase.

### Découverte du code

- Le code utilise des fonctions plutôt que des classes. Ecrire un bouton sous la forme d'une classe et d'une fonction. Retrouver les équivalences entre les méthodes des composants (telles que setState) et celles des fonctions ?
```javascript 

class Button extends React.Component {
  render() {
    return (<button onClick={this.props.onClick}> {this.props.children} </button>);
  }
}

export default Button;

``` 

- Comment récupérer les props dans une fonction ?

→ Plusieurs solutions :
```javascript
const { onClick, children } = props;
```

```javascript
const truc = props.children;
```
- Dans `App.js`, identifier les différents producteurs de données. Retrouver leur définition. Quelles données partagent-ils à l'ensemble de l'application ?

→ UserProvider => Définis dans le fichier User.js, il gère l'état de la connexion de l'user avec la database et l'affiche à l'utilisateur (ex: "Chargement...")

→ MasterGameProvider => Définis dans le fichier MasterGame.js, il gère la connexion avec la database du coté de la partie et ne se s'occuper pas du coté joeur (Représente le game master dont on s'affranchis)

→ GameProvider => Définis dans le fichier Game.js, il gère la connexion avec la database pendant la partie pour envoyer les informations à afficher sur l'écran joeur et gérer ses actions

→ BrowserRouter => Gère les déplacemetns entre les pages et la réécriture d'URL (Routage)

- Identifier les différentes pages de l'application. Décrire à l'aide d'une phrase le rôle de chacune d'entre elles.

→ StartPage.js => Page d'accueil qui s'affiche à l'arivée sur le site permettant de créer ou rejoindre une partie

→ CreatePage.js => Page de création de la partie permettant d'obtenir le code la partie et de la démarrer mais aussi d'ajouter un joeur (AddPlayerForm)
 
→ NightPage.js => Affichage de ce qui se passe pendant la nuit durant la partie

→ EndPage.js => Affiche le résultat finale (en fin de partie)

→ DeadPage.js => Page qui s'affiche pour un joeur lorsqu'il est mort 

→ SpellPage.js => Page qui s'affiche pour la soricère lui permttant d'utilsier ses pouvoirs

→ ResultsPage => Affiche les résultats du vote et les morts

→ CastPage => Permet au joueur de voter

→ Alive.js => PAge afihcée pour les joeurs encore vivants

→ CodePage.js => Page permettant de se connecter 

- Pourquoi voit-on sur plusieurs pages "Chargement du master game en cours" ?

→ Car il est appelé dans game.js et MasterGame.js 

- Avec les classes, nous utilisions `withMyContext` pour s'inscrire aux données d'un provider. Identifier dans services/Game.js la fonction qui joue désormais ce rôle.

```javascript
    export const useGame = () => {
      const {game} = useContext(gameContext);
      return {game};
    };
```

→ C'est cette fonction, useGame(), qui joue désormais ce rôle

- Dans `CodePage`, rappeler comment un formulaire gère les champs de remplissage des données.o

**TODO**

### Reprise du design

- En utilisant styled-components, reprendre le design du composant Button.
- Votre nouveau bouton peut alors être utilisé pour améliorer l'affichage de la page `StartPage`.
- Ajouter un header et un footer sur toutes les pages de l'application. 
- Réaliser le design du formulaire de de `CodePage`, utilisé pour rejoindre l'application.
- Faire de même avec `CreatePage`.
- **J'ai rajouter quelques éléments de design et de navigation au site non demandé ci dessus, retrouvé la liste ci dessous :**


### Utilisation de Firebase

- Dans 'User.js', comment fait-on pour garder une trace persistente de l'application, même lorsqu'on rafraichit la page ? Comment reconnait-on l'utilisateur lorsqu'il revient dans l'application ?
- Dans Firebase, nous ne pouvons pas ajouter des champs à un utilisateur. Par conséquent, nous devons créer une collection d'utilisateurs et synchroniser les utilisateurs avec cette table. Expliquer où est-ce que cette synchronisation a lieu.
- A votre avis, à quoi sert useEffect ?
- A quoi sert la fonction `unsubscribe` utilisée dans les `useEffect` de `User.js` ?
- Décrire les trois valeurs de retour de `UseUser`.
- Combien de collections dans Firebase pouvez-vous identifier ? A quoi correspondent les `doc` ?

### Contribuer à l'application

- Lors du lancement du jeu, ajouter l'attribution des rôles à chaque joueur : loup-garou, villageois, petite fille ou sorcier. Le nombre de loup-garou est calculé en fonction du nombre de joueurs.
- Chaque joueur reçoit alors une image de son rôle. Partager cette information depuis /wait.
- Lorsque la nuit tombe, la liste des joueurs encore vivants est proposée aux  loups garous, qui doivent se mettre d'accord. Réaliser cette fonction.
- Lorsque le jour arrive, tous les joueurs reçoivent une notification indiquant la cible des loups garous. Cette dernière est redirigée vers DeadPage.
- Les joueurs vivant votent pour éliminer un joueur, suspecté d'être un loup garou. Réaliser cette fonction.

### Rapport

Rédiger un court rapport -- inférieur à une page, expliquant les modifications apportées au projet. Motiver ses choix. Expliquer les difficultés rencontrées.

