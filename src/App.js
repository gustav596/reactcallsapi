import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Customers from './components/Customer';
import { Container } from "@material-ui/core"

function App() {

  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        
      </Container>
      <Customers />
    </Provider>
  );
}

export default App;
