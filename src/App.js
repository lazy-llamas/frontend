import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './jsx/Components/SubComponents/ScrollToTop';
import Home from "./jsx/Pages/Home";
import { LazyLounge } from './jsx/Pages/LazyLounge';
import { LazyToken } from './jsx/Pages/LazyToken';
import { LazyIsland } from './jsx/Pages/LazyIsland';
import { Media } from './jsx/Pages/Media';
import { TheLab } from './jsx/Pages/TheLab';
import { LabInfo } from './jsx/Pages/LabInfo';
import { LabLobby } from './jsx/Pages/LabLobby';
import { SerumX } from './jsx/Pages/SerumX';
import { Mutate } from './jsx/Pages/Mutate';
import { Mixing } from './jsx/Pages/Mixing';

export default function App() {
  return (
    <div className='bg-darkBlue_900'>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={'/lazy-lounge'} component={LazyLounge} />
          <Route exact path={'/lazy-token'} component={LazyToken} />
          <Route exact path={'/lazy-island'} component={LazyIsland} />
          <Route exact path={'/media'} component={Media} />
          <Route exact path={'/the-lab'} component={TheLab} />
          <Route exact path={'/lab-how-to'} component={LabInfo} />
          <Route exact path={'/lab-lobby'} component={LabLobby} />
          <Route exact path={'/serum-x'} component={SerumX} />
          <Route exact path={'/mutation-chamber'} component={Mutate} />
          <Route exact path={'/mixing-chamber'} component={Mixing} />
        </Switch>
      </Router>
    </div>
  );
}