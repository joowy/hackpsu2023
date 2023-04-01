import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Hero from './components/Hero/Hero';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI-driven Financial Inclusion</h1>
      </header>
      <main>
        <ChakraProvider>
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/form" component={Form} />
          </Switch>
        </ChakraProvider>
      </main>
      <footer>
        <p>&copy; InclusiScore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;