import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import ListOfCustomers from './components/ListOfCustomers';
import { Container } from "@material-ui/core"

function App() {

  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        
      </Container>
      <ListOfCustomers />
    </Provider>
  );
}

export default App;
