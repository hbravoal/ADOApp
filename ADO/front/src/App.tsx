import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import Router from './presentation/navigation/Router';
import DependencyInjectionInfrastructure from './infrastructure/dependencyInfrastructure';

DependencyInjectionInfrastructure();
function App() {
  return <Router></Router>;
}

export default App;
