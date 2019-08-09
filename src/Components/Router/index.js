import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import MemeIndexPage from '../MemeIndexPage';

export default function Router() {
  return(
    <BrowserRouter>
      <Navbar/>
      <Route path="/memes" component={MemeIndexPage}></Route>
    </BrowserRouter>
  )
}