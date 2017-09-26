import React from 'react';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.css'; //para que se vea mas bonito


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
      </div>
    );
  }
}

export default App;
