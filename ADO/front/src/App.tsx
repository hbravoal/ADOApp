import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './presentation/navigation/Router';
import DependencyInjectionInfrastructure from './infrastructure/dependencyInfrastructure';
import DependencyInjectionApplication from './application/dependencyApplication';
DependencyInjectionApplication();
DependencyInjectionInfrastructure();
function App() {
  return <Router></Router>;
}

export default App;
