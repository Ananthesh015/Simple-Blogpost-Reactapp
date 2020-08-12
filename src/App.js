import React from 'react';
import './App.css';
import { Provider } from 'react-redux';  
import Main from './components/MainComponent';
// import SampleUi from './components/sampleUi';
import { ConfigureStore } from './redux/configureStores';


const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Main/>
        {/* <SampleUi/> */}
      </div>
    </Provider>
  );
}

export default App;
