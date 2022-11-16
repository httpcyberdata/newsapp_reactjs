import React from 'react'
import { Router, Routes, BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import { Header } from './components/common/header/Header';
import { Homepage } from './components/home/Homepage';

export const App = () => {
  return (
    <div>
        <Header />
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
        </BrowserRouter>
    </div>
  )
}
export default App;