import React from 'react'
import { Router, Routes, BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import { Header } from './components/common/header/Header';
import  Homepage  from './components/home/Homepage';
import Footer from './components/common/footer/footer';
export const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer />
        </BrowserRouter>
    </div>
  )
}
export default App;