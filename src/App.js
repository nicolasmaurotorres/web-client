import React from 'react';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.css'; //para que se vea mas bonito
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  render() {
    /* este es el layout general de la app*/
    return (
      <div className="App">
        <NavigationBar />
        <FlashMessagesList />
      </div>
    );
  }
}

export default App;
