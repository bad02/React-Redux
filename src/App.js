import React from 'react'
import { Provider } from 'react-redux'   // for getting store in react
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer.js';
import ItemContainer from './components/ItemContainer';
//import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>   { /*provider component for getting store in react and passing store as a prop*/}
      <div className="App">
        {/* <UserContainer /> */}
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />   { /*rendering component*)*/}
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
