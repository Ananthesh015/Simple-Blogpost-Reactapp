import React from 'react';
import './App.css';
import { Provider } from 'react-redux';  
import Main from './components/MainComponent';
import { ConfigureStore } from './redux/configureStores';


const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
