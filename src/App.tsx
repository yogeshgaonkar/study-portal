import { FlexButton } from 'flexible-ui-comps'
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Intelliswift Study Portal</h1>
        </header>
        <FlexButton />
      </div>
    );
  }
}

export default App;
