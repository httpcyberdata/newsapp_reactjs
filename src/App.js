import React from 'react'
import { Router, Routes, BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import { Header } from './components/common/header/Header';
import  Homepage  from './components/home/Homepage';
import Footer from './components/common/footer/footer';
import Culture from './components/culture/Culture';
import SinglePages from './components/singlePages/Singlepages';
import { useHistory, Redirect } from 'react-router-dom';
const App = () => {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/singlepage/:id" component={SinglePages} />
            <Route exact={true} path="/culture" component={Culture} />
          </Switch>
        <Footer />
    </div>
  )
}
export default App;