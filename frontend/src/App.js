import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './screens/Home'
import NoteScreen from './screens/NoteScreen'

function App() {
  return (
    <Router>
  {/*just a button to navigate to second UI
        <main>
        <Switch>
        <Route exact path="/" component={}/>
        <Route exact path="/:url" component={}/>

        </switch>
        </main>
    }*/}

    <main>
        <Switch>
        <Route exact path="/" component={Home}/>
        
        <Route exact path="/:url" component={NoteScreen}/>

        </Switch>
        </main>
    



    
   

    </Router>
   
  );
}

export default App;
